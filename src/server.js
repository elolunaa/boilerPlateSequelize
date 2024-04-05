const express = require("express") // importar express

require("./db.js") //

const server = express() // guaradr express en variable

server.name="ecommerceApi" // nombrar servidor


server.get("/", (req,res)=>{
    res.status(200).send("Hola, estas conectado correctamente")
})

module.exports = server