const express = require("express");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const app = express();
app.use(express.json());
app.use(cookieParser());
app.get("/", (req, res) => {
    let token = jwt.sign({ email: "dhruvaldaladi1907@gmail.com" }, "secret")
    res.cookie("token", token)
    res.send("complete")
})
app.get("/read",(req,res)=>{
    let data = jwt.sign(req.cookies.token,"secret")
    console.log(data);
    
})
app.listen(3000, () => {
    console.log("server is running on port 3000");
});
