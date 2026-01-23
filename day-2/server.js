const express = require("express")

const app = express()

app.post("/notes",(req,res)=>{
    res.send("notes created")
    console.log(req.body);
    
})

app.listen(3000,()=>{
    console.log("the server is runnig on 3000");
    
})