import express from 'express';
import dotenv from "dotenv";
import { getSequelize } from './database/db.js';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// ------------Prueba de conexión con DB (esto no va ir acá)-------------

const sequelize = getSequelize();

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Conexión exitosa a la base de datos.');
  } catch (error) {
    console.error('Error al conectar a la base de datos:', error);
  }
})();

// ------------Prueba de conexión con DB (esto no va ir acá)-------------

app.use(express.json());

//Ejemplo de un endpoint básico
app.use("/peliculas", (req, res) => {
  res.send("Endpoint de películas no implementado aún.");
})

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});