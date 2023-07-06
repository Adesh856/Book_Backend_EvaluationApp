const express = require("express")
const BooksRouter = express.Router()
const BooksModel = require("../models/Books.model")

//AddBooks
BooksRouter.post("/add",async(req,res)=>{
    const payload = req.body
    try {
        const Book = new BooksModel(payload)
        await Book.save()
        res.status(200).send({"msg":"Book has been added"})
    } catch (error) {
    res.status(401).send({"msg":error.message})
    }
})

//getAllBooks
BooksRouter.get("/",async(req,res)=>{
   try {
    const Books = await BooksModel.find()
     res.status(200).send({Books})
   } catch (error) {
    res.status(401).send({"msg":error.message})
   }
})

///delete
BooksRouter.delete("/delete/:_id",async(req,res)=>{
    const _id = req.params._id
    try {
        const DeletedUser=await BooksModel.findIdByAndDelete(_id)
        console.log(DeletedUser)
     res.status(200).send({"msg":`Book has been deleted`})
        
    } catch (error) {
    res.status(401).send({"msg":error.message})
        
    }
})

///filterRoute

BooksRouter.get("/filter",async(req,res)=>{
    const {Genre} = req.query
    try {
        const FilteredBYGenre = await BooksModel.find({Genre})
     res.status(200).send({FilteredBYGenre})
    } catch (error) {
    res.status(401).send({"msg":error.message})
        
    }
})
///Sort
BooksRouter.get("/sort",async(req,res)=>{
    const {sort} = req.query
    
    try {
        let n ;
        if(sort==="asc"){
           n=1 
        }else if(sort==="desc"){
            n=-1
        }
        const SortBYPRice = await BooksModel.find().sort({Price:n})
     res.status(200).send({SortBYPRice})
    } catch (error) {
    res.status(401).send({"msg":error.message})
        
    }
})





module.exports =BooksRouter




