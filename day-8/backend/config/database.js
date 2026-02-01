const mongoose = require("mongoose")

function mongoDB() {
    mongoose.connect(process.env.MONGO_URI)
        .then(() => {
            console.log("connected to DB");
        })
}

module.exports = mongoDB