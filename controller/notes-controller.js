const Note = require("../models/note-models");

async function seedNotes(req, res) {
   try {
      await Note.deleteMany({});
      await Note.create(
         {
            title: "Title 1",
            body: "Body 1",
         },
         {
            title: "Title 2",
            body: "Body 2",
         },
         {
            title: "Title 3",
            body: "Body 3",
         },
      );
      res.status(201).json({ message: "Database seeded." });
   } catch (error) {
      console.error(error);
      res.status(400).json({ error: error.message });
   }
}

async function getNotes(req, res) {
   try {
      const notes = await Note.find({});
      res.status(200).json(notes);
   } catch (error) {
      console.error(error);
      res.status(400).json({ error: error.message });
   }
}

async function deleteNote(req, res) {
   try {
      const deletedNote = await Note.findByIdAndDelete(req.params.id);
      res.status(200).json(deletedNote);
   } catch (error) {
      console.error(error);
      res.status(400).json({ error: error.message });
   }
}

async function updateNote(req, res) {
   try {
      const updatedNote = await Note.findByIdAndUpdate(
         req.params.id,
         req.body,
         { new: true, runValidators: true },
      );
      res.status(200).json(updatedNote);
   } catch (error) {
      console.error(error);
      res.status(400).json({ error: error.message });
   }
}

async function createNote(req, res) {
   try {
      const createdNote = await Note.create(req.body);
      res.status(201).json(createdNote);
   } catch (error) {
      console.error(error);
      res.status(400).json({ error: error.message });
   }
}

async function getNote(req, res) {
   try {
      const note = await Note.findById(req.params.id);
      res.status(200).json(note);
   } catch (error) {
      console.error(error);
      res.status(400).json({ error: error.message });
   }
}

module.exports = {
   seedNotes,
   getNotes,
   deleteNote,
   updateNote,
   createNote,
   getNote,
};
