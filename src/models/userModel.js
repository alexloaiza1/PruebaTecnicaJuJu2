const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const bcrypt = require("bcryptjs");

const User = sequelize.define(
  "User",
  {
    UsuarioID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      field: "UsuarioID", // Especificamos el nombre del campo en la tabla
    },
    NombreUsuario: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
      field: "NombreUsuario", // Especificamos el nombre del campo en la tabla
    },
    Contrasena: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: "Contrasena", // Especificamos el nombre del campo en la tabla
    },
    FechaCreacion: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      field: "FechaCreacion", // Especificamos el nombre del campo en la tabla
    },
    EsActivo: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      field: "EsActivo", // Especificamos el nombre del campo en la tabla
    },
  },
  {
    timestamps: false, // No generar campos de timestamps (createdAt, updatedAt)
    tableName: "Usuarios", // Especificamos el nombre de la tabla
  }
);

// Encriptar la contraseña antes de guardar
User.beforeCreate(async (user) => {
  user.Contrasena = await bcrypt.hash(user.Contrasena, 10);
});

module.exports = User;
