const express = require("express")
const authRouter = require("../src/routes/auth.route")
const app = express()

app.use("/api/auth",authRouter)
app.use(express.json())

module.exports = app