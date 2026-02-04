const mongoose = require("mongoose")

function connectTODB() {
    mongoose.connect(process.env.MONGO_URI)
        .then(() => {
            console.log("DB connected");
        })
        .catch((errr) => {
            console.log(errr);
        })
}
module.exports = connectTODB

