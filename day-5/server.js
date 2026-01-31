const app = require("./src/app")

const mongoose = require("mongoose")

app.listen(3000,()=>{
    console.log("server is running ");
})

function connection(){
    mongoose.connect("mongodb+srv://Dhruval:MOHsmQG4RIET3Al5@cluster0.gpsr3jg.mongodb.net/day-1")

    console.log("connection is established");
}

connection()

app
