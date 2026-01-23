const express = require("express")

const app = express()

app.get("/",(req,res)=>{
    res.send("this is a home page")
})

app.get("/about",(req,res)=>{
    res.send("this is a about page ")
})

app.get("/home",(req,res)=>{
    res.send("this is a home page")
})
app.listen(3000,()=>{
    console.log("the server is working on the 3000");
    
})