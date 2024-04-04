//Servidor backend con EXPRESS


const express = require("express") // Importando express
const {Pool} = require("pg") // Importando Poool de pg
const usuarios = require("../usuarios.json")
const server = express() // Se guarda express en una variable que puede llamarse server o server
const PORT = 3000 // Variable del puerto donde quiere que se abra, suele ponerse en maysuculas

const pool = new Pool({
    user:'postgres',
    host:'localhost',
    database:'dvd rental',
    password:'eloisa',
    port: 5432 //puerto por defecto de Postgresql
})
  server.listen(PORT, () => {
    console.log(`Conexión con el puerto ${PORT}`)
  }) // se escha el servidor LOCALHOST que se quiere (3000)

  server.get('/', (req, res) => {
    console.log("Entre a la peticion get de /saludo")
    res.status(202).send("GET prueba a / sola")
  })

  server.get("/films",(req,res)=>{
    const order = req.query.order
    
    let querySQL = `SELECT * FROM film ORDER BY film_id`

    if (order){
        querySQL =`SELECT * FROM film ORDER BY film_id ${order}`
    }

    pool.query(querySQL, (error,result)=>{
        if(error){
            res.status(500).send("Error al conectar la peticición:", error)
        }else{
            res.status(200).json(result.rows)
        }
   })
  })

  server.get("/films/:id", (req,res)=>{
    const film_id = parseInt(req.params.id)
    let querySQL = `SELECT  * FROM film WHERE film_id = ${film_id}`
    // `SELECT title, description FROM film WHERE film_id = ${film_id}`
    pool.query(querySQL, (error,result)=>{
        if(error){
            res.status(500).send("Error al conectar la peticición: ", error)
        }else{
            // let pelicula ={
            //     title: result.rows[0].title,
            //     description: result.rows[0].description
            // }
            res.status(200).json(result.rows)
        }
    })
  })

//   server.delete("/films/:id",(req,res)=>{
//     const film_id = parseInt(req.params.id)
//     let querySQL = `DELETE FROM film WHERE film_id = ${film_id}`
//     pool.query(querySQL, (error,result)=>{
//         if(error){
//             res.status(500).send("Error al conectar la peticición: ", error)
//         }else{
//             // let pelicula ={
//             //     title: result.rows[0].title,
//             //     description: result.rows[0].description
//             // }
//             res.status(200).json("La pelicula se eliminó correctamente")
//         }
//     })

//   })