import express from 'express';
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

//Ejemplo de un endpoint básico
app.use("/peliculas", (req, res) => {
  res.send("Endpoint de películas no implementado aún.");
})

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});