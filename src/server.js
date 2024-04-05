const express = require("express") // importar express
const server = express() // guaradr express en variable
const routes = require("./routes/index.routes.js")
const bodyParser = require("body-parser")
require("./db.js") //


server.name="ecommerceApi" // nombrar servidor

//Mildware bodyparser de npm install body-parser
server.use(bodyParser.urlencoded({extended:true, limit:"50mb"}))
server.use(bodyParser.json({limit:"50mb"}))


server.use("/", routes) //Conexion con todas las rutas

server.use((err,req,res,next)=>{
    const status = err.status || 500
    const message = err.message || err
    console.log(err)
    res.status(status).send(message)
})


module.exports = server