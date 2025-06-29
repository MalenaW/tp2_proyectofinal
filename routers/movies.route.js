import { Router } from "express";
import {getPopularMovies, getMoviesById} from "../controllers/movies.controller.js";

const router = Router();

router.get("/popular", getPopularMovies)
router.get("/:id", getMoviesById)

export default router;
