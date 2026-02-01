import SystemDesignNote from "../models/SystemDesignNote.js";

const requireUser = (req, res) => {
  if (!req.user) {
    res.status(401).json({ message: "Not authorized" });
    return false;
  }
  return true;
};

export const createSystemDesignNote = async (req, res) => {
  if (!requireUser(req, res)) return;

  const note = await SystemDesignNote.create({
    userId: req.user._id,
    title: req.body.title,
    blocks: [],
  });

  res.json(note);
};

export const getSystemDesignNotes = async (req, res) => {
  if (!requireUser(req, res)) return;

  const notes = await SystemDesignNote.find({ userId: req.user._id });
  res.json(notes);
};

export const getSystemDesignNoteById = async (req, res) => {
  if (!requireUser(req, res)) return;

  const note = await SystemDesignNote.findById(req.params.id);
  res.json(note);
};

export const updateSystemDesignNote = async (req, res) => {
  if (!requireUser(req, res)) return;

  const note = await SystemDesignNote.findById(req.params.id);
  if (!note) return res.status(404).json({ message: "Not found" });

  note.blocks = req.body.blocks;
  note.needsRevision = req.body.needsRevision;

  await note.save();
  res.json(note);
};

export const deleteSystemDesignNote = async (req, res) => {
  if (!requireUser(req, res)) return;

  await SystemDesignNote.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
};
