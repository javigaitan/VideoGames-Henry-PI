const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('videogame', {
    id:{
      type: DataTypes.UUID, //genera un numero random y letras
      defaultValue: DataTypes.UUIDV4,
      allowNull: false, //no te permito que este vacio
      primaryKey:true, 

    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description:{
      type: DataTypes.TEXT,
      allowNull: false,

    },
    platforms:{
      type: DataTypes.ARRAY(DataTypes.TEXT),
      allowNull: false,

    },
    background_image:{
      type: DataTypes.STRING,
      allowNull: false,

    },
    released:{
      type: DataTypes.STRING,
      allowNull: false,

    },
    rating:{
      type: DataTypes.FLOAT,
      allowNull: false,

    },
    createInDb:{
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,

    },

  });
};
