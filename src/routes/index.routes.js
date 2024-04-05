const {Router}= require("express")
const router = Router()
const productRouter = require("./product.routes")
const categoryRouter = require("./category.routes")
// //Configurar routers, router.use('/auth', authRouter)
router.get("/", (req,res)=>{
    res.send("GET de prueba / sola")
})


router.use("/products", productRouter)
router.use("/categories", categoryRouter)

module.exports = router

// const {saludar} = require ("../controllers/welcomeControllers")

// server.get('/welcome', (req, res) => {
//     console.log("Entre a la peticion get de /welcome")
//     try{
//         saludar()
//         res.status(202).send("GET de prueba a / sola, BIENVENID@")
//     }catch (error){
//         console.log("Estoy dentro del catch")
//         res.status(400).send("Error")
//     }
//   })

//   server.get("/films",(req,res)=>{
//     const order = req.query.order
    
//     let querySQL = `SELECT * FROM film ORDER BY film_id`

//     if (order){
//         querySQL =`SELECT * FROM film ORDER BY film_id ${order}`
//     }

//     pool.query(querySQL, (error,result)=>{
//         if(error){
//             res.status(500).send("Error al conectar la peticición:", error)
//         }else{
//             res.status(200).json(result.rows)
//         }
//    })
//   })

//   server.get("/films/:id", (req,res)=>{
//     const film_id = parseInt(req.params.id)
//     let querySQL = `SELECT  * FROM film WHERE film_id = ${film_id}`
//     // `SELECT title, description FROM film WHERE film_id = ${film_id}`
//     pool.query(querySQL, (error,result)=>{
//         if(error){
//             res.status(500).send("Error al conectar la peticición: ", error)
//         }else{
//             // let pelicula ={
//             //     title: result.rows[0].title,
//             //     description: result.rows[0].description
//             // }
//             res.status(200).json(result.rows)
//         }
//     })
//   })


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