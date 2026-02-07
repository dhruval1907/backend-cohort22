const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    email: {
        type: String,
        unique: true
    },
    name: String,
    password: String
})

const userModel = mongoose.model("users", userSchema)

module.exports = userModel