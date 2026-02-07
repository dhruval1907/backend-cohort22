const express = require("express")
const authRouter = require("./")
const app = express()

app.post("/api/auth",authR)

module.exports = app