const express = require("express")

const app = express()

app.listen(3000,()=>{
    console.log("the server is running on 3000");
})

app.post("/notes",(req,res)=>{
    
})