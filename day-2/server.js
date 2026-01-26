const express = require("express")
const app = express()
app.listen(3000, () => {
    console.log("the server is runnig on 3000");
})
const notes = []
app.post("/notes",(req,res)=>{
    res.send("notes is created")
    
})

