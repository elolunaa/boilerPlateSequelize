const {Router}= require("express")
const router = Router()
const {Category} = require("../db")

//Ruta para traer todas las categorias
router.get("/", async (req,res)=>{
    try{
        const allCategories = await Category.findAll()

        console.log(allCategories)

        res.status(200).json(allCategories)

    } catch (error){
        res.status(400).json(error)
    }
    // console.log("GET de prueba / products")
})

//Crear una categoria
router.post("/", async(req,res)=>{
    try{
        const categoryBody = req.body
        await Category.create(categoryBody)
        res.status(200).json("Producto creado correctamente ")
    }
    catch(error){
        console.log(error)
        res.status(400).json(error)

    }
})

module.exports = router