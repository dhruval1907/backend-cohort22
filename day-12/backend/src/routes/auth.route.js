const express = require("express")
const authRouter = express.Router()
const userModel = require("../models/user.model")
const cookie = require("cookie-parser")
const jwt = require("jsonwebtoken")
authRouter.post("/register", async (req, res) => {
    const { email, password, name } = req.body

    const isAlreadyExist = await userModel.findOne({ email })

    if (isAlreadyExist) {
        return res.status(409).json({
            message: "user already registered"
        })
    }

    const user = await userModel.create({
        email, password, name
    })

    const token = jwt.sign({
        name: user.name,
        id: user._id,
        email: user.email,
        password: user.password
    }, process.env.JWT_SECRET)

    res.cookie("token", token)

    res.status(201).json({
        message: "user registered",
        user,
        token
    })

})

authRouter.post("/login", async (req, res) => {
    const { email, password } = req.body
    const user = await 
})


module.exports = authRouter