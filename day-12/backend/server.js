require("dotenv").config()
const app = require("./src/app")
const cors = require("cors")
const MONGODB = require("./src/config/database")
MONGODB()
cors()

app.listen(3000, () => {
    console.log("server is running on 3000");
})