const {Router}= require("express")
const router = Router()
const {Product, Category} = require("../db")



//Ruta para traer todos los productos
router.get("/", async (req,res)=>{
    try{
        const allProducts = await Product.findAll()

        console.log(allProducts)

        res.status(200).json(allProducts)

    } catch (error){
        res.status(400).json(error)
    }
    // console.log("GET de prueba / products")
})


//
router.get("/:id", async(req,res)=>{
    try{
        const id = parseInt(req.params.id)
        console.log(id)
        const product = await Product.findByPk(id)
        res.status(200).json(product)
    }catch (error){
        res.status(400).json(error)
    }
})


//Crear un productp QUEDO PENDIENTEEEEEE
router.post("/", async(req,res)=>{
    try{
        const {title, description, price, image, stock, category} = req.body

        const categoryAdd = await Category.findOne({where:{name:category}})

       const newProduct = await Product.create({
        title, 
        description,
        price, 
        image, 
        stock, 
        category})

        await newProduct.addCategory(category)

        res.status(200).json("Producto creado correctamente ")
    }
    catch(error){
        console.log(error)
        res.status(400).json(error)

    }
})

//Editar un producto
router.patch("/:id",async(req,res)=>{
    try{
        const id = parseInt(req.params.id)
        const data = req.body
        Product.update(data,{where: {id:id}})
        res.status(200).json("Producto actualizado correctamente")
    }
    catch(error){
        console.log(error)
        res.status(400).json(error)
    }

})


module.exports = router