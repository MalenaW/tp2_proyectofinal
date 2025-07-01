import axios from "axios";
import config from '../config/dotenv.config.js';

export const getAllPopularMovies = async (page) => {
  try {
    const response = await axios.get(`${config.themoviedb.baseUrl}/movie/popular`, {
      params: {
        api_key: config.themoviedb.apiKey,
        language: "es-ES",
        page: page,
      },
    });
    
    return response.data.results;
  } catch (err) {
    console.error(`Service | ${err}`);
    throw new Error(err.message);
  }
};


export const getMovieByID = async (id) => {
  try {
      const response = await axios.get(`${config.themoviedb.baseUrl}/movie/${id}`, {
      params: {
        api_key: config.themoviedb.apiKey,
        language: 'es-ES',
      },
    });
    return response.data;
  }catch (err) {
    console.error(`Service | ${err}`);
    throw new Error(err.message);
  }
}

export const getAllMoviesByGenre = async (page, genreId) => {
  try {
    const response = await axios.get(`${config.themoviedb.baseUrl}/discover/movie`, {
      params: {
        api_key: config.themoviedb.apiKey,
        language: "es-ES",
        with_genres: genreId,
        page: page,
      },
    });

    return response.data.results;
  } catch (err) {
    console.error(`Service | ${err}`);
    throw new Error("No se pudieron obtener las películas por género.");
  }
};

