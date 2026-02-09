const mongoose = require("mongoose")

function coonectTODB() {
    mongoose.connect(process.env.MONGO_URI)
        .then(() => {
            console.log("connected to DB");
        })
}

module.exports = coonectTODB