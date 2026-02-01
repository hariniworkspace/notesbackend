import express from "express";
import protect from "../middleware/authMiddleware.js";

import {
  getCoderNotes,
  getCoderNoteById,
  createCoderNote,
  updateCoderNote,
  deleteCoderNote,
  getWeakTopics,
  toggleRevision,   // 👈 import
} from "../controllers/coderNoteController.js";

const router = express.Router();

router.use(protect);
import { upload } from "../middleware/upload.js";

router.post("/upload-image", upload.single("image"), (req, res) => {
  res.json({ imageUrl: `/uploads/${req.file.filename}` });
});

router.get("/", getCoderNotes);
router.post("/", createCoderNote);
router.get("/:id", getCoderNoteById);
router.put("/:id", updateCoderNote);
router.get("/weak-topics", getWeakTopics);
router.delete("/:id", deleteCoderNote);

// 👇 new route
router.patch("/:id/revision", toggleRevision);

export default router;
