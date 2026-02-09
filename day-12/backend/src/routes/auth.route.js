const express = require("express")
const userModel = require("../models/user.model")
const authRouter = express.Router()

authRouter.post("/register", async (req, res) => {
    const { email, password, name } = req.body

    

})



























// const express = require("express")
// const authRouter = express.Router()
// const userModel = require("../models/user.model")
// const cookie = require("cookie-parser")
// const jwt = require("jsonwebtoken")
// const crypto = require("crypto")
// authRouter.post("/register", async (req, res) => {
//     const { email, password, name } = req.body
//     const isAlreadyExist = await userModel.findOne({ email })
//     if (isAlreadyExist) {
//         return res.status(409).json({
//             message: "user already registered"
//         })
//     }
//     const userPass = crypto.createHash("md5").update(password).digest("hex")
//     const user = await userModel.create({
//         email,
//         password: userPass
//         , name
//     })
//     const token = jwt.sign({
//         name: user.name,
//         id: user._id,
//         email: user.email,
//         password: user.password
//     }, process.env.JWT_SECRET)
//     res.cookie("token", token)
//     res.status(201).json({
//         message: "user registered",
//         user,
//         token
//     })
// })

// authRouter.post("/login", async (req, res) => {
//     const { email, password } = req.body
//     const user = await userModel.findOne({ email })
//     if (!user) {
//         return res.status(400).json({
//             message: "user invalid"
//         })
//     }
//     const isPasswordMatched = user.password === password
//     if (!isPasswordMatched) {
//         return res.status(401).json({
//             message: "password is incorrect"
//         })
//     }
//     res.status(200).json({
//         message: "user logged in",
//         user
//     })

// })


// module.exports = authRouter