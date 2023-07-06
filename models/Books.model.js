const mongoose = require("mongoose")
const BookSchema = mongoose.Schema({
    Title:String,
    Author:String,
    Description:String,
Genre:String,
 Price:Number

})

const BooksModel =mongoose.model("Book",BookSchema)

module.exports =BooksModel