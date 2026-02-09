const express = require("express")

// middleware
const app = express()
app.use(express.json())



module.exports = app