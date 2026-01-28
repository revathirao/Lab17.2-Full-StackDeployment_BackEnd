const express = require("express");
const router = express.Router();
const notesController = require("../controller/notes-controller");

router.get("/seed", notesController.seedNotes);
router.get("/", notesController.getNotes);
router.delete("/:id", notesController.deleteNote);
router.put("/:id", notesController.updateNote);
router.post("/", notesController.createNote);
router.get("/:id", notesController.getNote);

module.exports = router;
