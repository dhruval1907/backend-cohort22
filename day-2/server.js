const express = require("express")

const app = express()

app.get("/",(req,res)=>{
    res.send("hello world")
})


app.get("/about",function(res,req){
    req.send("this is about page")
})

app.listen(3000)
