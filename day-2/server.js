const express = require("express")

const app = express()

app.listen(3000, () => {
    console.log("the server is running on 3000");
})

const post = []

app.use(express.json())

app.post("/notes", (req, res) => {
    res.send("notes is created")

    console.log(req.body);

    post.push(req.body)
})

app.get("/notes", (req, res) => {
    res.send(post)
})

app.delete("/notes/:index", (req, res) => {
    delete post[req.params.index]
    res.send('deleted successfully')
})


