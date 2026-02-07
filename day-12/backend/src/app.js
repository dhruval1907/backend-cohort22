const express = require("express")
const app = express()
const cors = require("cors")
const authRouter = require("../src/routes/auth.route")
const cookieParser = require("cookie-parser")
// middleware
app.use(express.json())
app.use(cors())
app.use(cookieParser())
app.use("/api/auth", authRouter)

// app.get("/register", async (req, res) => {
//     const users = await userModel.find()
//     res.status(200).json({
//         message: "fethcing the users",
//         users
//     })
// })
// app.delete("/register/:id", async (req, res) => {
//     const id = req.params.id
//     await userModel.findByIdAndDelete(id)

//     res.status(200).json({
//         message: "user deleted",
//     })
// })
// app.patch("/register/:id", async (req, res) => {
//     const id = req.params.id
//     const { email } = req.body
//     await userModel.findByIdAndUpdate(id, { email })
//     res.status(200).json({
//         message: "user modified",
//     })
// })

module.exports = app