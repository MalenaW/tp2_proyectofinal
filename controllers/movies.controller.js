import { getAllPopularMovies } from "../services/movies.service.js";

export const getPopularMovies = async (req, res) => {
  try {
    const movies = await getAllPopularMovies();  
    res.status(200).json(movies);
  } catch (err) {
    console.error(`Controller | ${err}`);
    res.status(500).json({ error: err.message });
  }
};