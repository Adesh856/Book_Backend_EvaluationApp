const mongoose = require("mongoose")
const BookSchema = mongoose.Schema({
     Title:{type:String,unique:true},
     Author:{type:String,required:true},
     Description:{type:String,required:true},
     Genre:{type:String,required:true},
     Price:{type:Number,required:true},

})

const BooksModel =mongoose.model("Book",BookSchema)

module.exports =BooksModel