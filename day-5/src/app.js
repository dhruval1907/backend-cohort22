const express = require("express")
const app = express()
const notemodel = require("../models/note.model")

app.use(express.json())

app.post("/notes", async (req, res) => {
    const { title, description , age } = req.body

    const note = await notemodel.create({
        title, description , age
    })

    res.status(201).json({
        message: "note is created",
        note
    })

})

app.get("/notes", async (req, res) => {
    const notes = await notemodel.find()

    res.status(200).json({
        message: "fatching the notes",
        notes,
    })
})

module.exports = app