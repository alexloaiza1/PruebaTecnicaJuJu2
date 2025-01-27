const express = require("express");
const router = express.Router();
const bookController = require("../controllers/bookController");
const authenticateUser = require("../middlewares/authMiddleware");

router.post("/books", authenticateUser, bookController.createBook);
router.put("/books/:id", authenticateUser, bookController.updateBook);
router.get("/books", authenticateUser, bookController.getAllBooks);
router.delete("/books/:id", authenticateUser, bookController.deleteBook);

module.exports = router;
