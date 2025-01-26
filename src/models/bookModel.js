const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Book = sequelize.define(
  "Book",
  {
    LibroID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Titulo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Autor: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    AnioPublicacion: {
      type: DataTypes.INTEGER,
      allowNull: false,
      // Establece el valor predeterminado a la fecha y hora actual
    },
    Estado: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    UsuarioCreacion: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "Libros",
    timestamps: false,
  }
);

module.exports = Book;
