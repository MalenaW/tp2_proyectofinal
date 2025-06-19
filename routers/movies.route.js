import { Router } from "express";
import {getPopularMovies} from "../controllers/movies.controller.js";

const router = Router();

router.get("/popular", getPopularMovies)

export default router;
