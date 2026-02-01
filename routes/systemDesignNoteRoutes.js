import express from "express";
import protect from "../middleware/authMiddleware.js";
import {
  createSystemDesignNote,
  getSystemDesignNotes,
  getSystemDesignNoteById,
  updateSystemDesignNote,
  deleteSystemDesignNote,
} from "../controllers/systemDesignNoteController.js";

const router = express.Router();

router.post("/", protect, createSystemDesignNote);
router.get("/", protect, getSystemDesignNotes);
router.get("/:id", protect, getSystemDesignNoteById);
router.put("/:id", protect, updateSystemDesignNote);
router.delete("/:id", protect, deleteSystemDesignNote);

export default router;
