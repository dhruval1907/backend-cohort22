const app = require("../day-3/src/app")

app.listen(3000, () => {
    console.log("server is runnig on 3000");
})
const notes = []
app.post("/notess", (req, res) => {
    res.send("notes created")
    const note = req.body
    notes.push(note)
})
app.get("/notess", (req, res) => {
    res.send(notes)
})

