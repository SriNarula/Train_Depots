import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import depotRoutes from "./routes/depotRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

// Define allowed frontend URLs
const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:3000",
  "https://train-depots-frontend.onrender.com"
];

// CORS configuration
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
  optionsSuccessStatus: 200
};

// Apply CORS middleware
app.use(cors(corsOptions));

// Handle preflight requests
app.options("*", cors(corsOptions));

// Other middlewares
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use("/api/depots", depotRoutes);

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error.message);
  });
