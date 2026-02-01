const express = require("express")
const noteModel = require("../models/note.model")

const app = express()
const cors = require("cors")
app.use(cors())
app.use(express.json())

app.post("/api/notes", async (req, res) => {
    const { title, description } = req.body

    const note = await noteModel.create({
        title, description
    })

    res.status(201).json({
        message: "note added successfully",
        note
    })

})

app.get("/api/notes", async (req, res) => {
    const note = await noteModel.find()
    res.status(200).json({
        message: "fethcing the data",
        note
    })
})

app.delete("/api/notes/:id", async (req, res) => {
    const id = req.params.id

    await noteModel.findByIdAndDelete(id)

    res.status(200).json({
        message: "note deleted",
    })
})

app.patch("/api/notes/:indx", async (req, res) => {
    const id = req.params.indx

    const { description } = req.body

    await noteModel.findByIdAndUpdate(id, { description })

    res.status(200).json({
        message: "note modified successfully",
    })
})

module.exports = app
