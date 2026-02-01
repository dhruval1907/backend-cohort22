const app = require("./src/app")

require("dotenv").config()
const mongoDB = require("./config/database")

mongoDB()

app.listen(3000,()=>{
    console.log("server is running on 3000"); 
})