// Importacion de dotenv
require("dotenv").config();

// Importacion de express
const express = require("express");
const app = express();

// Puerto que elijamos por el env o por defecto 3001
const PORT = process.env.PORT || 3001;

// Ruta comun
app.get("/", (req, res) => {
  res.send("Hello, world!");
});

// Endpoint
app.get("/api", (req, res) => {
  res.json({ message: "Hola desde el servidor!" });
});

// Puerto donde escucha el servidor
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
