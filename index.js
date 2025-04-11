const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Depot = require("./models/DepotSchema.js");       
const Contact = require("./models/ContactSchema.js");   
const sampleData = require("./models/Sample.js");       
require('dotenv').config();

const app = express();
const PORT = 8080;

// ✅ Allowed origins including deployed frontend
const allowedOrigins = [
  "http://localhost:3000",
  "http://localhost:5173",
  "https://train-depots-frontend.onrender.com"  // ✅ Added deployed frontend origin
];

// ✅ Use cors middleware
app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: "GET,POST,PUT,DELETE,OPTIONS",
  allowedHeaders: "Origin, X-Requested-With, Content-Type, Accept, Authorization",
  credentials: true,
}));

app.use(express.json());

const depotsURL = process.env.DEPOTS_ATLAS_URL;
const contactsURL = process.env.CONTACTS_ATLAS_URL;

const mapConnection = mongoose.createConnection(depotsURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const contactsConnection = mongoose.createConnection(contactsURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mapConnection.on("connected", () => {
  console.log(" Connected to map database");
  insertSampleData();
});

contactsConnection.on("connected", () => console.log("Connected to contacts database"));

mapConnection.on("error", (error) => console.error("Map DB connection error:", error));
contactsConnection.on("error", (error) => console.error("Contacts DB connection error:", error));

const DepotModel = mapConnection.model("Depot", Depot.schema);
const ContactModel = contactsConnection.model("Contact", Contact.schema);

const insertSampleData = async () => {
  try {
    const existingData = await DepotModel.countDocuments();
    
    if (existingData === 0) {
      console.log("⚡ Inserting sample data...");
      await DepotModel.insertMany(sampleData);   
      console.log("Sample data inserted successfully!");
    } else {
      console.log("Sample data already exists. Skipping insertion.");
    }
  } catch (error) {
    console.error("Error inserting sample data:", error);
  }
};

app.get("/api/depots", async (req, res) => {
  try {
    const depots = await DepotModel.find();
    res.json(depots);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch depots", error });
  }
});

app.get("/api/depots/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const depot = await DepotModel.findById(id);
    if (!depot) {
      return res.status(404).json({ message: "Depot not found" });
    }
    res.json(depot);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch depot details", error });
  }
});

app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, purpose, message } = req.body;

    if (!name || !email || !purpose || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newContact = new ContactModel({
      name,
      email,
      purpose,
      message,
    });

    await newContact.save();  
    console.log("Message saved:", newContact);

    res.status(201).json({ message: "Contact form submitted successfully!", data: newContact });

  } catch (error) {
    console.error("Error saving contact form:", error);
    res.status(500).json({ message: "Failed to submit form", error });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
