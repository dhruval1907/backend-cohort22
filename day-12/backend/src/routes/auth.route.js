const express = require("express")
const userModel = require("../models/user.model")
const authRoute = express.Router()
const jwt = require("jsonwebtoken")
authRoute.post("/register", async (req, res) => {
    const { email, password, name } = req.body
    const userAlreayExist = await userModel.findOne({ email })
    if (userAlreayExist) {
        return res.status(400).json({
            message: "user is already exists"
        })
    }

    const users = await userModel.create({
        email, name, password
    })

    let token = jwt.sign({
        id: users._id,
        name: users.name,
        email: users.email,
        password: users.password
    }, process.env.JWT_SECRET)

    res.cookie("token", token)

    res.status(201).json({
        mesage: 'user created successfully',
        users,
        token
    })
})

authRoute.post("/login", async (req, res) => {
    const { email, password } = req.body

    const user = await userModel.findOne({ email })

    if (!user) {
        return res.status(404).json({
            message: "user note found"
        })
    }

    const isPasswordmatched = user.password === password

    if (!isPasswordmatched) {
        return res.send(401).json({
            message: "invalid password"
        })
    }

    const token = jwt.sign({
        email,
        password
    }, process.env.JWT_SECRET)


    res.cookie("token", token)

    res.status(201).json({
        mesage: 'user logged in      successfully',
        user,
        token
    })
})
module.exports = authRoute