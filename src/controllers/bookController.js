const Book = require("../models/bookModel");
const User = require("../models/userModel");

// Crear un nuevo libo
const createBook = async (req, res) => {
  try {
    const { titulo, autor, anio, estado, userid } = req.body;
    console.log(req.body);
    console.log(anio);
    // Verificar si el usuario está autenticado
    //if (!req.user) {
    // return res
    //  .status(401)
    // .json({ error: "Acceso denegado, se requiere autenticación" });
    //  }

    // Crear el libro
    const newBook = await Book.create({
      Titulo: titulo,
      Autor: autor,
      AnioPublicacion: anio,
      Estado: estado,
      UsuarioCreacion: userid,
    });

    res.status(201).json(newBook);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createBook,
};
