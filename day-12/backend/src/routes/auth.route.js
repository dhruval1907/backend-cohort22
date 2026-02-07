require("dotenv").config()
const express = require("express")
const userModel = require("../models/user.model")
const authRoute = express.Router()
const jwt = require("jsonwebtoken")


authRoute.post("/register", async (req, res) => {
    const { email, password, name } = req.body

    const userAlreadyExists = await userModel.findOne({ email })

    if (userAlreadyExists) {
        return res.status(400).json({
            message: 'user already exists'
        })
    }

    const users = await userModel.create({
        email, name, password
    })

    const token = jwt.sign({
        id: users._id,
        email: users.email,
        password: users.password
    },
        process.env.JWT_SECRET
    )

    res.cookie("token", token)

    res.status(201).json({
        mesage: 'user created successfully',
        users,
        token
    })
})

module.exports = authRoute