const express = require("express")
const noteModel = require("../models/note.model")

const app = express()

app.use(express.json())

app.post("/api/notes", async (req, res) => {
    const { title, description } = req.body

    const note = await noteModel.create({
        title, description
    })


    res.status(201).json({
        message: "notes created",
        note
    })

})

app.get("/api/notes", async (req, res) => {
    const note = await noteModel.find()
    res.status(200).json({
        message: "data is fetching",
        note,
    })
})

app.delete("/api/notes/:index",async (req, res) => {
    const id = req.params.index    

    await noteModel.findByIdAndDelete(id)

    res.status(200).json({
        message : "note deleted successfully",
    })
    
})


module.exports = app
