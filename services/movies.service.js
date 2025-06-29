import axios from "axios";

  const BASE_URL = "https://api.themoviedb.org/3";

export const getAllPopularMovies = async (page) => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/popular`, {
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
      const response = await axios.get(`${BASE_URL}/movie/${id}`, {
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
