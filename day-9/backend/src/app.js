const express = require("express")
const noteModel = require("../models/data.model")

const app = express()
const cors = require("cors")

app.use(express.json())
app.use(cors())

app.post("/api/notes", async (req, res) => {
    const { title, description } = req.body
    const note = await noteModel.create({
        title, description
    })
    res.status(201).json({
        message: "notes is created",
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

app.delete("/api/notes/:indx", async (req, res) => {
    const id = req.params.indx
    await noteModel.findByIdAndDelete(id)

    res.status(200).json({
        message: "note deleted",
    })
})

app.patch("/api/notes/:indx", async (req, res) => {
    const { description } = req.body
    const id = req.params.indx

    await noteModel.findByIdAndUpdate(id, { description })

    res.status(200).json({
        message: "data is modified"
    })


})

module.exports = app