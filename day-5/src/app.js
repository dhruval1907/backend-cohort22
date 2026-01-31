const express = require("express")
const app = express()
const notemodel = require("../models/note.model")

app.use(express.json())

app.post("/notes", async (req, res) => {
    const { title, description } = req.body
    
    const note = await notemodel.create({
        title, description
    })

    res.status(201).json({
        message: "note is created",
        note
    })
    
})

// app.get("/notes",(req,res)=>{
//     res.send("server is created")
// })

module.exports = app