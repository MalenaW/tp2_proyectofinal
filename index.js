
import dotenv from "dotenv";
dotenv.config();
import express from 'express';
import MoviesRouter from './routers/movies.route.js';
import FavoritesRouter from './routers/favorites.route.js';
import ReviewsRouter from './routers/reviews.route.js';
import { getSequelize } from './database/db.js';
import UsersRouter from './routers/users.route.js';
import { authenticateToken } from './middlewares/auth.js';
import config from './config/dotenv.config.js';
import { notImplemented } from "./middlewares/notImplementedRoute.js";

const app = express();
const PORT = config.port || 3000;

// ------------Prueba de conexión con DB-------------

const sequelize = getSequelize();

(async () => {
  console.log('Intentando conectar a DB con:', {
  name: config.db.name,
  user: config.db.user,
  host: config.db.host,
  port: config.db.port
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
app.use(express.urlencoded({ extended: true }));

app.use("/movie", MoviesRouter);
app.use("/favorite",authenticateToken, FavoritesRouter);
app.use("/review", ReviewsRouter);
app.use("/users", UsersRouter);

//Middleware para manejar rutas no implementadas
app.use(notImplemented);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});