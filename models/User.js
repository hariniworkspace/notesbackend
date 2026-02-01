import mongoose from "mongoose";

const activitySchema = new mongoose.Schema({
  date: String,   // "2026-01-12"
  count: Number,
});

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },

    streak: { type: Number, default: 0 },
    bestStreak: { type: Number, default: 0 },
    lastActiveDate: String,

    activityLog: [activitySchema],
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
