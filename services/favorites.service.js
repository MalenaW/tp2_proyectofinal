import models from "../models/index.js";
import { getMovieByID } from "./movies.service.js";


export const getAllFavoriteMovies = async (userId) => {
  try {
    const favorites = await models.Favorite.findAll({
      where: { userId },
    });

    if (!favorites || favorites.length === 0) {
      return [];
    }

    return favorites;
  } catch (error) {
    console.error(`Service | Error fetching favorite movies: ${error}`);
    throw new Error("Error fetching favorite movies");
  }
};

export const addFavoriteMovieS = async (userId, movieId) => {
  try {
    //Reutilizo metodo de "movies.service.js" para obtener la pelicula por id
    const movie = await getMovieByID(movieId);

    if (!movie) throw new Error("Película no encontrada");

    const existing = await models.Favorite.findOne({
      where: { userId, movieId },
    });
    if (existing) throw new Error("Ya está en favoritos");

    return await models.Favorite.create({
      userId,
      movieId,
      title: movie.title,
      overview: movie.overview,
      posterPath: movie.poster_path,
      releaseDate: movie.release_date,
      voteAverage: movie.vote_average,
    });
  } catch (error) {
    console.error(`Service | ${error}`);
    throw new Error(`Service | ${error}`);
  }
};

export const deleteFavoriteMovieS = async (userId, movieId) => {
  try {
    const result = await models.Favorite.destroy({
      where: { userId, movieId },
    });

    return result > 0;
  } catch (error) {
    console.error(`Service | ${error}`);
    throw new Error(`Service | ${error}`);
  }
};
