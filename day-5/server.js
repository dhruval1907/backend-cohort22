const app = require("./src/app")

const mongoose = require("mongoose")

app.listen(3000,()=>{
    console.log("server is running ");
})

function connection(){
    mongoose.connect(process.env.MONGO_URI)

    console.log("connection is established");
}

connection()


