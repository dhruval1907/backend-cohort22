const express = require("express")
const app = express()
const userModel = require("./models/user.model")
// middleware
app.use(express.json())

app.post("/register", async (req, res) => {
    const { email, password, name } = req.body
    const users = await userModel.create({
        email, name, password
    })
    res.status(201).json({
        mesage: 'user created successfully',
        users
    })
})
app.get("/register", async (req, res) => {
    const users = await userModel.find()
    res.status(200).json({
        message: "fethcing the users",
        users
    })
})
app.delete("/register/:id", async (req, res) => {
    const id = req.params.id
    await userModel.findByIdAndDelete(id)

    res.status(200).json({
        message: "user deleted",
    })
})
app.patch("/register/:id", async (req, res) => {
    const id = req.params.id
    const {email} = req.body
    await userModel.findByIdAndUpdate(id, { email })
    res.status(200).json({
        message: "user modified",
    })
})

module.exports = app