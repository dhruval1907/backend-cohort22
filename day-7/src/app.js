const express = require("express")
const app = express()
const noteModel = require("../models/note.models")

app.use(express.json())

app.post("/", async (req, res) => {

    const { title, description , age } = req.body

    const note = await noteModel.create({
        title, description , age
    })

    res.status(200).json({
        message: "note is created",
        note
    })
})

app.get("/", async (req, res) => {
    const note = await noteModel.find()

    res.status(200).json({
        message : "fetching the data",
        note,
    })
})

module.exports = app