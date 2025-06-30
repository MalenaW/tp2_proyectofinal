import { getAllPopularMovies, getMovieByID, getAllMoviesByGenre } from "../services/movies.service.js";

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
  if (!id) {
    return res.status(400).json({ error: "ID de película es requerido" });
  }
  try {
    const movie = await getMovieByID(id);
    res.status(200).json(movie);
  } catch (err) {
    console.error(`Controller | ${err}`);
    res.status(500).json({ error: err.message });
  }
}

export const getMoviesByGenre = async (req, res) => {
  const { genreId } = req.params;
  const page = req.query.page || 1;
  if (!genreId) {
    return res.status(400).json({ error: "ID de género es requerido" });
  }
  try {
    const movies = await getAllMoviesByGenre(page, genreId);
    res.status(200).json(movies);
  } catch (err) {
    console.error(`Controller | ${err}`);
    res.status(500).json({ error: err.message });
  }
}