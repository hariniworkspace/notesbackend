import DbmsNote from "../models/DbmsNote.js";

export const createDbmsNote = async (req, res) => {
  const note = await DbmsNote.create({
    userId: req.user._id,
    title: req.body.title,
    blocks: [],
  });
  res.json(note);
};

export const getDbmsNotes = async (req, res) => {
  const notes = await DbmsNote.find({ userId: req.user._id });
  res.json(notes);
};

export const getDbmsNoteById = async (req, res) => {
  const note = await DbmsNote.findById(req.params.id);
  res.json(note);
};

export const updateDbmsNote = async (req, res) => {
  const note = await DbmsNote.findById(req.params.id);
  note.blocks = req.body.blocks;
  note.needsRevision = req.body.needsRevision;
  await note.save();
  res.json(note);
};

export const deleteDbmsNote = async (req, res) => {
  await DbmsNote.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
};
