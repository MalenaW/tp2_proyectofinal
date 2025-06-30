import {
  getAllFavoriteMovies,
  addFavoriteMovieS,
  deleteFavoriteMovieS,
} from "../services/favorites.service.js";

// Listar favoritos del usuario logueado
export const listarFavoritos = async (req, res) => {
  const userId = req.user.id;

  try {
    const favoritos = await getAllFavoriteMovies(userId);
    res.json(favoritos);
  } catch (error) {
    console.error("Error al obtener favoritos:", error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};

// Agregar película a favoritos
export const agregarFavorito = async (req, res) => {
  const userId = req.user.id;
  const movieId = req.params.movieId;

  try {
    const favorito = await addFavoriteMovieS(userId, movieId);
    res.status(201).json({
      message: `Película "${favorito.title}" agregada a favoritos`,
    });
  } catch (error) {
    console.error("Error al agregar favorito:", error.message);
    res.status(400).json({ error: error.message });
  }
};

// Eliminar película de favoritos
export const eliminarFavorito = async (req, res) => {
  const userId = req.user.id;
  const movieId = req.params.movieId;

  try {
    const eliminado = await deleteFavoriteMovieS(userId, movieId);
    if (!eliminado) {
      return res
        .status(404)
        .json({ error: "Película no encontrada en favoritos" });
    }
    res.json({ message: "Película eliminada de favoritos" });
  } catch (error) {
    console.error("Error al eliminar favorito:", error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};
