import {
  getAllFavoriteMovies,
  addFavoriteMovieS,
  deleteFavoriteMovieS,
} from "../services/favorites.service.js";

//Para estas acciones se va a necesitar el id del usuario.
//Lo mejor seria que en la peticion del usuario se envie el id dentro del token (que genere el JWT) y se valide en el middleware de autenticacion y se guarde en req.user.id.

export const getFavoriteMovies = async (req, res) => {
  try {
    req.user = { id: 1 }; // Simulando que el id del usuario está en req.user.id (ya esta autenticado)
    const { id } = req.user;
    const movies = await getAllFavoriteMovies(id);
    res.status(200).json(movies);
  } catch (error) {
    console.error(`Controller | ${error}`);
    res.status(500).json({ error: error.message });
  }
};

export const addFavoriteMovie = async (req, res) => {
  req.user = { id: 1 }; // Simulando que el id del usuario está en req.user.id (ya esta autenticado)
  const { id } = req.user;
  const { movieId } = req.params;
  try {
    if (!movieId) {
      return res.status(400).json({ error: "ID de película es requerido" });
    }
    const resp = await addFavoriteMovieS(id, movieId);

    res
      .status(201)
      .json({ message: `Película "${resp.title}" agregada a favoritos` });
  } catch (error) {
    console.error(`Controller | ${error}`);
    res.status(500).json({ error: error.message });
  }
};

export const removeFavoriteMovie = async (req, res) => {
  req.user = { id: 1 }; // Simulando que el id del usuario está en req.user.id (ya esta autenticado)
  const { id } = req.user;
  const { movieId } = req.params;
  try {
    if (!movieId) {
      return res.status(400).json({ error: "ID de película es requerido" });
    }

    const deleted = await deleteFavoriteMovieS(id, movieId);

    if (!deleted) {
      return res
        .status(404)
        .json({ error: "Película no encontrada en favoritos" });
    }
    res
      .status(200)
      .json({ message: `Película con ID ${movieId} eliminada de favoritos` });
  } catch (error) {
    console.error(`Controller | ${error}`);
    res.status(500).json({ error: error.message });
  }
};
