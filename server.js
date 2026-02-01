import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

import oopsNoteRoutes from "./routes/oopsNoteRoutes.js";
import aptitudeNoteRoutes from "./routes/aptitudeNoteRoutes.js";
import systemDesignNoteRoutes from "./routes/systemDesignNoteRoutes.js";
import coderNoteRoutes from "./routes/coderNoteRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import dbmsNoteRoutes from "./routes/dbmsNoteRoutes.js";
import cnNoteRoutes from "./routes/cnNoteRoutes.js";

dotenv.config();
connectDB();

const app = express();


app.use(cors({
  origin: [
    "https://placement-notes.onrender.com",
    "http://localhost:5173"
  ],
  credentials: true
}));

app.use(express.json({ limit: "10mb" }));

// Routes
app.use("/api/dbms-notes", dbmsNoteRoutes);
app.use("/api/cn-notes", cnNoteRoutes);
app.use("/api/aptitude-notes", aptitudeNoteRoutes);
app.use("/api/system-design-notes", systemDesignNoteRoutes);
app.use("/api/codernotes", coderNoteRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/oops-notes", oopsNoteRoutes);

app.use("/uploads", express.static("uploads"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
