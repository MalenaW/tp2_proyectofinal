import { getAllPopularMovies } from "../services/movies.service.js";

export const getPopularMovies = async (req, res) => {
    const page = req.query.page || 1;
  try {
    const movies = await getAllPopularMovies(page);  
    res.status(200).json(movies);
  } catch (err) {
    console.error(`Controller | ${err}`);
    res.status(500).json({ error: err.message });
  }
};