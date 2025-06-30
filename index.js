
import dotenv from "dotenv";
dotenv.config();
import express from 'express';
import MoviesRouter from './routers/movies.route.js';
import FavoritesRouter from './routers/favorites.route.js';
import { getSequelize } from './database/db.js';
import UsersRouter from './routers/users.route.js';

const app = express();
const PORT = process.env.PORT || 3000;

// ------------Prueba de conexión con DB-------------

const sequelize = getSequelize();

(async () => {
  console.log('Intentando conectar a DB con:', {
  name: process.env.DB_NAME,
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT
});
  try {
    await sequelize.authenticate();
    console.log('Conexión exitosa a la base de datos.');
  } catch (error) {
    console.error('Error al conectar a la base de datos:', error);
  }
})();

// ------------Prueba de conexión con DB-------------

app.use(express.json());

app.use("/movie", MoviesRouter);
app.use("/favorite", FavoritesRouter);
app.use("/users", UsersRouter);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});