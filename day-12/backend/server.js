const app = require("./src/app")
const MONGO = require("./src/config/database")
require("dotenv").config()
// database connector
MONGO()

app.listen(3000,()=>{
    console.log("server is running on 3000");
})