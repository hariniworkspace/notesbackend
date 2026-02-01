import express from "express";
import protect from "../middleware/authMiddleware.js";
import {
  createOopsNote,
  getOopsNotes,
  getOopsNoteById,
  updateOopsNote,
  deleteOopsNote,
} from "../controllers/oopsNoteController.js";

const router = express.Router();

router.post("/", protect, createOopsNote);
router.get("/", protect, getOopsNotes);
router.get("/:id", protect, getOopsNoteById);
router.put("/:id", protect, updateOopsNote);
router.delete("/:id", protect, deleteOopsNote);

export default router;
