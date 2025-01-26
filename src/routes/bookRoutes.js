const express = require("express");
const router = express.Router();
const bookController = require("../controllers/bookController");

// Definir rutas para los libros
router.post("/books", bookController.createBook);
router.put("/books/:id", bookController.updateBook);
router.get("/books", bookController.getAllBooks);
router.delete("/books/:id", bookController.deleteBook);

module.exports = router; // Asegúrate de exportar el router correctamente
