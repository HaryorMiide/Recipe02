const express = require('express')
const ConnectDB = require("./db/config")
const routes = require("./Routes/buy")
require('dotenv').config()
const cors = require("cors")
const server = express()
const PORT = process.env.PORT;

const recipe = require('./model/recipe')


server.use(cors())
 server.use(express.json())
server.get("/",(req,res) =>{
    res.send("Hello World")
})

server.use("/api/v1/Recipe",routes)

const start = async () => {
    try {
        await ConnectDB()
        server.listen(PORT,() =>{
            console.log(`Server has started on ${PORT}`);
            
            })
    } catch (error) {
        console.log(error.message);
        
    }
}

start()

