const express = require("express")
const authRouter = express.Router()
const userModel = require("../models/user.model")
authRouter.use(express.json())
const jwt = require("jsonwebtoken")
const cookie = require("cookie-parser")
const 

authRouter.post("/register", async (req, res) => {
    const { email, name, password } = req.body

    const isUserAlereadyexits = await userModel.findOne({ email })

    if (isUserAlereadyexits) {
        return res.status(400).json({
            message: "user already registered"
        })
    }


    const user = await userModel.create({
        email, password, name,
    })

    const token = jwt.sign({
        email: user.email,
        id: user._id,
        name: user.name,
        password: user.password
    }, process.env.JWT_SECRET)

    res.cookie("token", token)

    res.status(201).json({
        message: "user created",
        user,
        token
    })

})


module.exports = authRouter
