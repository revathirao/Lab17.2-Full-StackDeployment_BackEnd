const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema(
   {
      title: {
         type: String,
         require: [true, "Please enter a title for this note."],
      },
      body: { type: String },
   },
   {
      timestamps: true,
   },
);

const Note = mongoose.model("Note", noteSchema);

module.exports = Note;
