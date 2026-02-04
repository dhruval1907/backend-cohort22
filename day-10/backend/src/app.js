const express = require("express");
const noteModel = require("../models/data.models");
const cors = require("cors");
const path = require("path");

const app = express();

// ================= MIDDLEWARE =================
app.use(cors());
app.use(express.json());
app.use(express.static("./public"))

// Static files (React build / HTML / CSS / JS)

// ================= API ROUTES =================

// CREATE NOTE
app.post("/api/notes", async (req, res) => {
  try {
    const { title, description } = req.body;

    const note = await noteModel.create({
      title,
      description,
    });

    res.status(201).json({
      message: "note created",
      note,
    });
  } catch (err) {
    res.status(500).json({ message: "error creating note" });
  }
});

// GET ALL NOTES
app.get("/api/notes", async (req, res) => {
  try {
    const note = await noteModel.find();

    res.status(200).json({
      message: "fetching the data",
      note,
    });
  } catch (err) {
    res.status(500).json({ message: "error fetching notes" });
  }
});

// DELETE NOTE
app.delete("/api/notes/:indx", async (req, res) => {
  try {
    await noteModel.findByIdAndDelete(req.params.indx);

    res.status(200).json({
      message: "note deleted",
    });
  } catch (err) {
    res.status(500).json({ message: "error deleting note" });
  }
});

// UPDATE NOTE (PATCH)
app.patch("/api/notes/:indx", async (req, res) => {
  try {
    await noteModel.findByIdAndUpdate(req.params.indx, req.body);

    res.status(200).json({
      message: "note updated successfully",
    });
  } catch (err) {
    res.status(500).json({ message: "error updating note" });
  }
});

// ================= WILDCARD ROUTE (ALWAYS LAST) =================
app.get("*name", (req, res) => {
  res.sendFile(
    path.join(__dirname,"..","public","index.html")
  );
});

module.exports = app;
