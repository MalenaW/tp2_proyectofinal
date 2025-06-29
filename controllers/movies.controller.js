import { getAllPopularMovies, getMovieByID } from "../services/movies.service.js";

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

export const getMoviesById = async (req, res) => {
  const { id } = req.params;
  try {
    const movie = await getMovieByID(id);
    res.status(200).json(movie);
  } catch (err) {
    console.error(`Controller | ${err}`);
    res.status(500).json({ error: err.message });
  }
}