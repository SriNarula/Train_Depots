import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import depotRoutes from "./routes/depotRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

// ✅ Allowed frontend domains (local + deployed)
const allowedOrigins = [
  "http://localhost:3000",
  "http://localhost:5173",
  "https://train-depots-frontend.onrender.com"
];

// ✅ CORS configuration
const corsOptions = {
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl) and from allowed origins
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      console.error("Blocked by CORS:", origin); // helpful debug log
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

// ✅ Route setup
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
