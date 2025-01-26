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

const getAllBooks = async (req, res) => {
  try {
    const books = await Book.findAll();
    res.status(200).json(books);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

const updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const { titulo, autor, anio, estado, userid } = req.body;

    // Asegúrate de que 'anio' esté en el formato correcto

    const [updated] = await Book.update(
      {
        Titulo: titulo,
        Autor: autor,
        AnioPublicacion: anio,
        Estado: estado,
        UsuarioCreacion: userid,
      },
      {
        where: { LibroID: id },
      }
    );

    if (!updated) {
      return res.status(404).json({ error: "Libro no encontrado" });
    }

    const updatedBook = await Book.findOne({ where: { LibroID: id } });
    res.status(200).json(updatedBook);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;

    const deleted = await Book.destroy({
      where: { LibroID: id },
    });

    if (!deleted) {
      return res.status(404).json({ error: "Libro no encontrado" });
    }

    res.status(200).json({ message: "Libro eliminado correctamente" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createBook,
  updateBook,
  getAllBooks,
  deleteBook,
};
