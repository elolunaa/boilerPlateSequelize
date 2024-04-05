require("dotenv").config() //Habilitar la lectura del archivo .env
const{DB_USER, DB_PASSWORD, DB_HOST, DB_PORT} = process.env //destructuring,
const fs = require("fs")
const path = require("path")
const { Sequelize } = require('sequelize');

// Option 1: Passing a connection URI
const sequelize = new Sequelize(
    `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/ecommerce`, 
    {
        logging: false, 
        native: false
    }
) 

const basename = path.basename(__filename); // para la ruta de archivos
const modelDefiners = []; //aca van a ser pusheados todos los models de la carpeta (tablas)
// Leemos todos los archivos "QUE SEAN .JS" de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });
// Inyectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach((model) => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);
// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const {Category, Product} = sequelize.models
// Aca vendrian las relaciones
module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, Category } = require('./db.js');
  sequelize: sequelize, // para importart la conexión { sequelize } = require('./db.js');
};