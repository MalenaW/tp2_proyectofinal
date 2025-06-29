import { Router } from "express";
import {getPopularMovies, getMoviesById, getMoviesByGenre} from "../controllers/movies.controller.js";

const router = Router();

router.get("/popular", getPopularMovies)
router.get("/:id", getMoviesById)
router.get("/genre/:genreId", getMoviesByGenre)

export default router;
