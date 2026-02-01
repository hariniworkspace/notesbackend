import express from "express";
import protect from "../middleware/authMiddleware.js";
import {
  createDbmsNote,
  getDbmsNotes,
  getDbmsNoteById,
  updateDbmsNote,
  deleteDbmsNote,
} from "../controllers/dbmsNoteController.js";

const router = express.Router();

router.post("/", protect, createDbmsNote);
router.get("/", protect, getDbmsNotes);
router.get("/:id", protect, getDbmsNoteById);
router.put("/:id", protect, updateDbmsNote);
router.delete("/:id", protect, deleteDbmsNote);

export default router;
