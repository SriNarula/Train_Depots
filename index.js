import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import depotRoutes from "./routes/depotRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

// ✅ Define allowed frontend URLs (deployed + local dev)
const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:3000",
  "https://train-depots-frontend.onrender.com"
];

// ✅ Recommended CORS setup for Render
const corsOptions = {
  origin: function (origin, callback) {
    // allow requests with no origin (like Postman) or if origin is in the allowed list
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      console.error("🚫 Blocked by CORS:", origin);
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
  optionsSuccessStatus: 200
};

// ✅ Apply CORS middleware BEFORE any routes or bodyParser
app.use(cors(corsOptions));
app.options("*", cors(corsOptions)); // enable preflight across all routes

app.use(bodyParser.json());

// ✅ Routes
app.use("/api/depots", depotRoutes);

// ✅ MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("Connected to MongoDB ✅");
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT} 🚀`);
  });
}).catch((error) => {
  console.error("Error connecting to MongoDB:", error.message);
});
