import axios from "axios";

export const getAllPopularMovies = async (page) => {
  try {
    const response = await axios.get(`${process.env.THEMOVIEDB_BASE_URL}/movie/popular`, {
      params: {
        api_key: process.env.THEMOVIEDB_API_KEY,
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
      const response = await axios.get(`${process.env.THEMOVIEDB_BASE_URL}/movie/${id}`, {
      params: {
        api_key: process.env.THEMOVIEDB_API_KEY,
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
    const response = await axios.get(`${process.env.THEMOVIEDB_BASE_URL}/discover/movie`, {
      params: {
        api_key: process.env.THEMOVIEDB_API_KEY,
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

