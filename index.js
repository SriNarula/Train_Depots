import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import depotRoutes from "./routes/depotRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

// Allowed origins
const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:3000",
  "https://train-depots-frontend.onrender.com"
];

// ✅ 1. Add manual header middleware BEFORE cors()
app.use((req, res, next) => {
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// ✅ 2. CORS config middleware
app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      console.error("🚫 Blocked by CORS:", origin);
      callback(new Error("❌ Not allowed by CORS"));
    }
  },
  credentials: true,
  optionsSuccessStatus: 200,
}));

// ✅ 3. Handle preflight OPTIONS
app.options("*", cors());

// ✅ 4. Other middlewares
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// ✅ 5. Routes
app.use("/api/depots", depotRoutes);

// ✅ 6. MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("✅ Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("❌ MongoDB connection error:", error.message);
  });
