const express = require("express")
const noteModel = require("../models/data.models")
const cors = require("cors")
const app = express()
app.use(cors())
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
        message: "fethcing the data",
        note
    })

})

app.delete("/api/notes/:indx", async (req, res) => {
    const id = req.params.indx
    await noteModel.findByIdAndDelete(id)
    res.status(200).json({
        message: "notes is deleted"
    })
})

app.patch("/api/notes/:indx", async (req, res) => {
    const id = req.params.indx
    const { description } = req.body
    await noteModel.findByIdAndUpdate(id, { description })

    res.status(200).json({
        message: "note change successfully",
    })
})






module.exports = app