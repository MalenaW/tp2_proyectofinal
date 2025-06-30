import { Router } from "express";
import { getFavoriteMovies, addFavoriteMovie, removeFavoriteMovie } from "../controllers/favorites.controller.js";

const router = Router();

router.get("/", getFavoriteMovies)
router.post("/:movieId", addFavoriteMovie)
router.delete("/:movieId", removeFavoriteMovie)

export default router;
