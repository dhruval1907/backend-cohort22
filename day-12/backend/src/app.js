const express = require("express")
const app = express()
const userModel = require("./models/user.model")
// middleware
app.use(express.json())

app.post("/register", async (req, res) => {

})

module.exports = app