import CoderNote from "../models/CoderNote.js";

const requireUser = (req, res) => {
  if (!req.user) {
    res.status(401).json({ message: "Not authorized" });
    return false;
  }
  return true;
};

export const getCoderNotes = async (req, res) => {
  if (!requireUser(req, res)) return;

  const notes = await CoderNote.find({ userId: req.user._id });
  res.json(notes);
};

export const getCoderNoteById = async (req, res) => {
  if (!requireUser(req, res)) return;

  const note = await CoderNote.findById(req.params.id);
  res.json(note);
};

export const createCoderNote = async (req, res) => {
  if (!requireUser(req, res)) return;

  const note = await CoderNote.create({
    userId: req.user._id,
    title: req.body.title,
    blocks: [],
  });

  res.json(note);
};

export const updateCoderNote = async (req, res) => {
  if (!requireUser(req, res)) return;

  const note = await CoderNote.findById(req.params.id);
  if (!note) return res.status(404).json({ message: "Not found" });

  note.blocks = req.body.blocks;
  note.needsRevision = req.body.needsRevision;

  await note.save();
  res.json(note);
};

export const deleteCoderNote = async (req, res) => {
  if (!requireUser(req, res)) return;

  await CoderNote.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
};

export const toggleRevision = async (req, res) => {
  if (!requireUser(req, res)) return;

  const note = await CoderNote.findById(req.params.id);
  note.needsRevision = !note.needsRevision;
  await note.save();

  res.json(note);
};
export const getWeakTopics = async (req, res) => {
  if (!req.user) {
    return res.status(401).json({ message: "Not authorized" });
  }

  const notes = await CoderNote.find({
    userId: req.user._id,
    needsRevision: true,
  });

  res.json(notes);
};
