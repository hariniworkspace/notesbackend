import express from "express";
import protect from "../middleware/authMiddleware.js";
import {
  createCnNote,
  getCnNotes,
  getCnNoteById,
  updateCnNote,
  deleteCnNote,
} from "../controllers/cnNoteController.js";

const router = express.Router();

router.post("/", protect, createCnNote);
router.get("/", protect, getCnNotes);
router.get("/:id", protect, getCnNoteById);
router.put("/:id", protect, updateCnNote);
router.delete("/:id", protect, deleteCnNote);

export default router;
