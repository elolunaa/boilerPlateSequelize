const { Sequelize, DataTypes } = require('sequelize')

module.exports = (sequelize) =>{
    sequelize.define("Product",{
        title:{
            type: DataTypes.STRING,
            allowNULL: false
        },
        description:{
            type: DataTypes.STRING,
            defaultValue: "No hay descripción"
        },
        price:{
            type: DataTypes.REAL
        },
        image:{
            type: DataTypes.STRING
        },
        stock:{
            type: DataTypes.REAL
        }
    },
    {timestamps:false})
}