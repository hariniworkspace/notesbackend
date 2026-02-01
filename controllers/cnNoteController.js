import CnNote from "../models/CnNote.js";

export const createCnNote = async (req, res) => {
  const note = await CnNote.create({
    userId: req.user._id,
    title: req.body.title,
    blocks: [],
  });
  res.json(note);
};

export const getCnNotes = async (req, res) => {
  const notes = await CnNote.find({ userId: req.user._id });
  res.json(notes);
};

export const getCnNoteById = async (req, res) => {
  const note = await CnNote.findById(req.params.id);
  res.json(note);
};

export const updateCnNote = async (req, res) => {
  const note = await CnNote.findById(req.params.id);
  note.blocks = req.body.blocks;
  note.needsRevision = req.body.needsRevision;
  await note.save();
  res.json(note);
};

export const deleteCnNote = async (req, res) => {
  await CnNote.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
};
