const express = require("express")
const noteModel = require("../models/note.models")

const app = express()
app.use(express.json())

app.post("/api/notes", async (req, res) => {
    const { title, description } = req.body
    const note = await noteModel.create({
        title, description
    })
    res.status(201).json({
        message: "note created",
        note
    })
})

app.get("/api/notes", async (req, res) => {
    const notes = await noteModel.find()
    res.status(200).json({
        message: "fetching the data",
        notes
    })
})

app.delete("/api/notes/:indx", async (req, res) => {
    const id = req.params.indx
    await noteModel.findByIdAndDelete(id)
    res.status(200).json({
        message: "notes deleted",
    })
})

app.patch("/api/notes/:indx", async (req, res) => {
    const id = req.params.indx
    const { description } = req.body
    await noteModel.findByIdAndUpdate(id, { description })
    res.status(200).json({
        message: "notes deleted",
    })
})

module.exports = app