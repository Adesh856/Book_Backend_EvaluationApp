const mongoose = require("mongoose")
require("dotenv").config()
const  DBconnection = mongoose.connect(process.env.mongourl)

module.exports=DBconnection