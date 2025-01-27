const jwt = require("jsonwebtoken");
const sequelize = require("../config/db");
const { QueryTypes } = require("sequelize");

const JWT_SECRET = "tu_secreto_jwt";

const login = async (req, res) => {
  try {
    const { NombreUsuario, Contrasena } = req.body;

    const result = await sequelize.query(
      "SELECT UsuarioID, NombreUsuario, Contrasena, EsActivo FROM Usuarios WHERE NombreUsuario = :NombreUsuario",
      {
        replacements: { NombreUsuario },
        type: QueryTypes.SELECT,
      }
    );

    const user = result[0];

    if (!user || !user.EsActivo) {
      return res
        .status(401)
        .json({ message: "Usuario no encontrado o inactivo" });
    }

    if (Contrasena !== user.Contrasena) {
      return res.status(401).json({ message: "Contraseña incorrecta" });
    }

    const token = jwt.sign({ userId: user.UsuarioID }, JWT_SECRET, {
      expiresIn: "1h",
    });

    res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error en el servidor" });
  }
};

module.exports = { login };
