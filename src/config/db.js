const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("Libros", "sa", "Arenas.loaiza1", {
  dialect: "mssql",
  host: "LAPTOP-FL2BH7DT",
  dialectOptions: {
    options: {
      encrypt: true,
      trustServerCertificate: true,
    },
  },
});

module.exports = sequelize;
