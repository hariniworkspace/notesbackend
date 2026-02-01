import mongoose from "mongoose";

const approachSchema = new mongoose.Schema({
  intuition: String,
  logic: String,
  code: String,
  time: String,
  space: String,
  images: [String], // store image URLs / base64 later
});

const coderNoteSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    title: String,
    difficulty: String,

    // 🧠 Problem
    problem: String,

    // 🔗 Links
    leetcodeLink: { type: String, default: "" },
    gfgLink: { type: String, default: "" },
    youtubeLink: { type: String, default: "" },

    // 🚀 Approaches
    brute: { type: approachSchema, default: () => ({}) },
    better: { type: approachSchema, default: () => ({}) },
    optimal: { type: approachSchema, default: () => ({}) },

    // ❗ Mistakes
    mistakes: String,

    // 🧠 Revision system (your old fields)
    needsRevision: { type: Boolean, default: false },
    editCount: { type: Number, default: 0 },
    lastRevisedAt: Date,
  },
  { timestamps: true }
);

export default mongoose.model("CoderNote", coderNoteSchema);
