import mongoose from "mongoose";

const blockSchema = new mongoose.Schema(
  {
    _id: false,
    title: String,
    content: String,
  }
);

const oopsNoteSchema = new mongoose.Schema(
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

export default mongoose.model("OopsNote", oopsNoteSchema);
