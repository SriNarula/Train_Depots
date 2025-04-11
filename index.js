import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import depotRoutes from "./routes/depotRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

// ✅ Use simple CORS config for reliability
app.use(cors({
  origin: "https://train-depots-frontend.onrender.com",
  credentials: true,
  optionsSuccessStatus: 200,
}));

// ✅ Preflight requests for all routes (especially POST, PUT, DELETE)
app.options("*", cors({
  origin: "https://train-depots-frontend.onrender.com",
  credentials: true,
  optionsSuccessStatus: 200,
}));

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
