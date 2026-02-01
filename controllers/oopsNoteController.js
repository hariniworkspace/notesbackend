import OopsNote from "../models/OopsNote.js";
import { getSimilarTitles } from "../utils/similarity.js";

export const createOopsNote = async (req, res) => {
  const note = await OopsNote.create({
    userId: req.user._id,
    title: req.body.title,
    blocks: [],
  });

  res.json(note);
};

export const getOopsNotes = async (req, res) => {
  const notes = await OopsNote.find({ userId: req.user._id });
  res.json(notes);
};

export const getOopsNoteById = async (req, res) => {
  const note = await OopsNote.findById(req.params.id);
  res.json(note);
};

export const updateOopsNote = async (req, res) => {
  const note = await OopsNote.findById(req.params.id);

  note.blocks = req.body.blocks;
  note.needsRevision = req.body.needsRevision;

  await note.save();
  res.json(note);
};

export const deleteOopsNote = async (req, res) => {
  await OopsNote.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
};
