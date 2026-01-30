const app = require("./src/app")
const mongoose = require("mongoose")

function connection (){
    mongoose.connect("mongodb+srv://dhruval:qdmEBiCgbHx2xalF@cluster0.nmmdxdq.mongodb.net/day-5").then(()=>{
        console.log("connection eastablished")
    })
}

connection()

app.listen(3000,(req,res)=>{
    console.log(("the server is runnig on 3000"));
})
