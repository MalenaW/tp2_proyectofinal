
import dotenv from "dotenv";
dotenv.config();
import express from 'express';
import MoviesRouter from './routers/movies.route.js';
import FavoritesRouter from './routers/favorites.route.js';
import ReviewsRouter from './routers/reviews.route.js';
import UsersRouter from './routers/users.route.js';
import AdminRouter from './routers/admin.route.js';
import { authenticateToken } from './middlewares/auth.js';
import config from './config/dotenv.config.js';
import { notImplemented } from "./middlewares/notImplementedRoute.js";

const app = express();
const PORT = config.port || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/movie", MoviesRouter);
app.use("/favorite",authenticateToken, FavoritesRouter);
app.use("/review", ReviewsRouter);
app.use("/users", UsersRouter);
app.use("/admin", AdminRouter);

//Middleware para manejar rutas no implementadas
app.use(notImplemented);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});