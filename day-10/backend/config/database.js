const mongoose = require("mongoose")


function connectDB() {
    mongoose.connect(process.env.MONGO_URI)
        .then((res) => {
            console.log("connect to DB");
        })
}

module.exports = connectDB