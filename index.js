const express = require("express")
const app = express()
const DBconnection = require("./db")
// const BooksRouter = requir("./routes/Books.routes.js")
const Cors = require("cors")
const BooksRouter = require("./routes/Books.routes")
require("dotenv").config()
app.use(express.json())
app.use(Cors())

app.use("/book",BooksRouter)

app.listen(process.env.port,async()=>{
    try {
        await DBconnection
        console.log(`DB is connected with  Server`)
    } catch (error) {
        console.log(`DB is not connected with  Server`)
    }
    console.log(`Server is Running on : ${process.env.port}`)
})