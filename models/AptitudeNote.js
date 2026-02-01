import mongoose from "mongoose";

const blockSchema = new mongoose.Schema({
  title: String,
  content: String,
});

const aptitudeNoteSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    title: String,
    blocks: [blockSchema],
    needsRevision: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model("AptitudeNote", aptitudeNoteSchema);
