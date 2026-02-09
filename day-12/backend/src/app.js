const express = require("express")
const authRouter = require("./routes/auth.route")
const cors = require("cors")
// middleware
const app = express()
app.use(express.json())
app.use("/api/auth", authRouter)
app.use(cors())



module.exports = app