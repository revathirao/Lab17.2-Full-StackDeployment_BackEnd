require("dotenv").config();
require("./config/db-connection");
const express = require("express");
const cors = require("cors");
const notesRouter = require("./routes/notes-router");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded());
app.use(express.json());
app.use(cors({ origin: "http://localhost:3001" }));
app.use("/api/notes", notesRouter);

app.get("/", (req, res) => {
   res.send("Welcome to my API!");
});

app.listen(PORT, () => {
   console.log(`Server is listening @ http://localhost:${PORT}`);
});
