import AptitudeNote from "../models/AptitudeNote.js";

export const createAptitudeNote = async (req, res) => {
  try {
    if (!req.user) {
      return res.status(401).json({ message: "User not authenticated" });
    }

    const note = await AptitudeNote.create({
      userId: req.user._id,
      title: req.body.title,
      blocks: [],
    });

    res.status(201).json(note);
  } catch (err) {
    console.error("Create Aptitude Error:", err);
    res.status(500).json({ message: "Server error creating note" });
  }
};

export const getAptitudeNotes = async (req, res) => {
  try {
    const notes = await AptitudeNote.find({ userId: req.user._id });
    res.json(notes);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error fetching notes" });
  }
};

export const getAptitudeNoteById = async (req, res) => {
  try {
    const note = await AptitudeNote.findById(req.params.id);
    res.json(note);
  } catch (err) {
    res.status(500).json({ message: "Error" });
  }
};

export const updateAptitudeNote = async (req, res) => {
  try {
    const note = await AptitudeNote.findById(req.params.id);
    note.blocks = req.body.blocks;
    note.needsRevision = req.body.needsRevision;
    await note.save();
    res.json(note);
  } catch (err) {
    res.status(500).json({ message: "Update failed" });
  }
};

export const deleteAptitudeNote = async (req, res) => {
  try {
    await AptitudeNote.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted" });
  } catch (err) {
    res.status(500).json({ message: "Delete failed" });
  }
};
