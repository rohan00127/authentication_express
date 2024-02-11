require('dotenv').config()
const express = require("express");
const server = express();
const port =  process.env.PORT;
console.log(port)
require("./databse/connection")

const router = require("./router/route")
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')
server.use(cookieParser())
server.use(bodyParser.json());
server.use("/", router)
server.use(express.static("public"))
server.set("view engine" , "ejs")


server.listen(port, ()=>{
    console.log(`Server is Started on Port ${port}`)
})