import express from "express";
import protect from "../middleware/authMiddleware.js";
import {
  createAptitudeNote,
  getAptitudeNotes,
  getAptitudeNoteById,
  updateAptitudeNote,
  deleteAptitudeNote,
} from "../controllers/aptitudeNoteController.js";

const router = express.Router();

router.post("/", protect, createAptitudeNote);
router.get("/", protect, getAptitudeNotes);
router.get("/:id", protect, getAptitudeNoteById);
router.put("/:id", protect, updateAptitudeNote);
router.delete("/:id", protect, deleteAptitudeNote);

export default router;
