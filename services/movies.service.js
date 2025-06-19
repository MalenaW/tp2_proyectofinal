import axios from "axios";

export const getAllPopularMovies = async (page) => {
  try {
    const API_KEY = process.env.THEMOVIEDB_API_KEY;
    const BASE_URL = "https://api.themoviedb.org/3";

    const response = await axios.get(`${BASE_URL}/movie/popular`, {
      params: {
        api_key: API_KEY,
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
