const express = require("express")
const app = express()
app.listen(3000, () => {
    console.log("the server is running in 3000");
})
const notes = []
app.use(express.json())
app.post("/notes", (req, res) => {
    res.send("notes is created")
    const note = req.body
    notes.push(note)
})
app.get("/notes", (req, res) => {
    res.send(notes)
})
app.delete("/notes/:index",(req,res)=>{
    delete notes[req.params.index]
    res.send("note is deleted")
})

app.patch("/notes/:index",(req,res)=>{
    notes[req.params.index].description = req.body.description

    res.send("note is changed")
})
app.put("/notes/:index",(req,res)=>{
    
    notes[req.params.index] = req.body
    res.send("note is changed")
})