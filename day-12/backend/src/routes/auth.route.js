const express = require("express")
const userModel = require("../models/user.model")
const authRoute = express.Router()

authRoute.post("/register", async (req, res) => {
    const { email, password, name } = req.body
    const users = await userModel.create({
        email,
        name,
        password
    })
    res.status(201).json({
        mesage: 'user created successfully',
        users
    })
})

module.exports = authRoute