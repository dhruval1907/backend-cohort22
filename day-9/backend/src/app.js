const express = require("express")
const noteModel = require("../models/data.model")

const app = express()

app.use(express.json())

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
        message : "fethcing the data",
        note
    })
})

module.exports = app