const app = require("./src/app")
const mongoose = require("mongoose")

// require("dotenv").config()

function connection() {
    mongoose.connect("mongodb+srv://Dhruval:6VtNOolnLqJBbUfB@cluster0.apwguvu.mongodb.net/day-2")
    console.log("connected to DB");

}

connection()

app.listen(3000, () => {
    console.log("server is running on 3000");
})
