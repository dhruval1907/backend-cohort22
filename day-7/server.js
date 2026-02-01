const app = require("./src/app")
const mongoose = require("mongoose")

function connect() {
    mongoose.connect("mongodb+srv://Dhruval:WMYNGv2NU03A41DV@cluster0.lctepwl.mongodb.net/day-3")
    console.log("DB is connected");
}

connect()

app.listen(3000, () => {
    console.log("server is runnig on 3000");
})