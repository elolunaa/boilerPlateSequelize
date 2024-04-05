require("dotenv").config() //Habilitar la lectura del archivo .env
const{EXPRESS_PORT} = process.env //destructuring
const server = require("./src/server")
const{sequelize} = require("./src/db")

//sincronizacion de todos los models de una sola vez
sequelize.sync({force:false}).then(()=>{


  server.listen(EXPRESS_PORT,()=>{
    console.log(`Se inició correctamente ek servidor en el puerto ${EXPRESS_PORT}`)
  }) // escuchando al servidor del LOCALHOST e
})

// server.listen(PORT, () => {
//   console.log(`Conexión con el puerto ${PORT}`)
// }) // se escucha el servidor LOCALHOST que se quiere (3000)






// const pool = new Pool({
//     user:'postgres',
//     host:'localhost',
//     database:'dvd rental',
//     password:'eloisa',
//     port: 5432 //puerto por defecto de Postgresql
// })
 





