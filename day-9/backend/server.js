const app = require("./src/app")

require("dotenv").config()
const mongo = require("./config/database")

mongo()

app.listen(3000,()=>{
    console.log("server is running on 3000");
})