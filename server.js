import express from "express";
import recipes from "./recipes.js";

const app = express();

// Middlewares globales (Se usan aquí mismo)

// Rutas
app.get("/", (req, res) => {
  return res.json(recipes);
});

app.listen(3000, () => {
  console.log("Servidor corriendo en el puerto 3000");
});
