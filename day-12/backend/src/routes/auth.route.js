const express = require("express")
const userModel = require("../models/user.model")
const authRouter = express.Router()
const jwt = require("jsonwebtoken")
const cookie = require("cookie-parser")
const crypto = require("crypto")


authRouter.post("/register", async (req, res) => {
    const { email, password, name } = req.body

    const isAlreadyExits = await userModel.findOne({ email })

    if (isAlreadyExits) {
        return res.status(409).json({
            message: "user already exits"
        })
    }
    const hashPassword = crypto.createHash("md5").update(password).digest("hex")

    const user = await userModel.create({
        email, password: hashPassword, name
    })

    const token = jwt.sign({
        id: user._id,
        password: hashPassword
    }, process.env.JWT_SECRET)

    res.cookie("token", token)

    res.status(201).json({
        message: "user registered",
        user,
        token
    })
})

authRouter.get("/register", async (req, res) => {
    const users = await userModel.find()

    res.status(200).json({
        message: "fethcing all the data",
        users
    })


})

authRouter.post("/login", async (req, res) => {
    const { email, password } = req.body
    const user = await userModel.findOne({ email })
    const isPassoworNotmatched = user.password === crypto.createHash("md5").update(password).digest("hex")
    if (!user) {
        return res.status(400).json({
            message: "user not found"
        })
    }
    if (!isPassoworNotmatched) {
        return res.status(400).json({
            message: "invalid password"
        })
    }
    const token = jwt.sign({
        id: user._id
    }, process.env.JWT_SECRET)

    res.cookie("token", token)
    res.status(200).json({
        message: "user logged-in",
        user, token
    })

})

module.exports = authRouter

