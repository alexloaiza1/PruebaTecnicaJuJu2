const express = require("express");
const app = express();
const bookRoutes = require("./routes/bookRoutes"); // Asegúrate de que la ruta sea correcta

// Middleware para manejar JSON en las solicitudes
app.use(express.json());

// Usar las rutas de libros
app.use("/api", bookRoutes); // Aquí pasas el router correctamente

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
