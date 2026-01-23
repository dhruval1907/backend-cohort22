const express = require("express")

const app = express()

const 

app.post("/notes",(req,res)=>{
    res.send("notes is created")

    console.log(req.body);
    

})

app.listen(3000,()=>{
    console.log("the server is running on the 3000");
})