import { getReviewsByMovieId, addNewReview, updateReviewById, deleteReviewById } from "../services/reviews.service.js";

export const listReviewsByMovieId = async (req, res) => {
    try{
        const movieId = req.params.movieId;
        const reviews = await getReviewsByMovieId(movieId);
        if (!reviews || reviews.length === 0) {
            return res.status(404).json({ message: "No se encontraron reseñas para esta película." });
        }
        return res.status(200).json(reviews);
    }catch(error){
        console.error("Error al listar reseñas:", error);
        return res.status(500).json({ message: "Error interno del servidor al listar reseñas." });
    }
}

export const addReview = async (req, res) => {
    try{
        const movieId = req.params.movieId;
        const userId = req.user.id;
        const { comment, rating } = req.body;
        if (!comment || !rating) {
            return res.status(400).json({ message: "Contenido y calificación son obligatorios." });
        }
        if (rating < 1 || rating > 10) {
            return res.status(400).json({ message: "La calificación debe estar entre 1 y 10." });
        }
        const newReview = await addNewReview(movieId, userId, comment, rating);
        return res.status(201).json(newReview);
    }catch(error){
        console.error("Error al agregar reseña:", error);
        return res.status(500).json({ message: "Error interno del servidor al agregar reseña." });
    }
}

export const updateReview = async (req, res) => {
    try{
        const reviewId = req.params.reviewId;
        const userId = req.user.id;
        const { comment, rating } = req.body;
        if (!comment || !rating) {
            return res.status(400).json({ message: "Contenido y calificación son obligatorios." });
        }
        if (rating < 1 || rating > 10) {
            return res.status(400).json({ message: "La calificación debe estar entre 1 y 10." });
        }
        const updatedReview = await updateReviewById(reviewId, userId, comment, rating);
        if (!updatedReview) {
            return res.status(404).json({ message: "Reseña no encontrada o no pertenece al usuario." });
        }
        return res.status(200).json(updatedReview);
    }catch(error){
        console.error("Error al actualizar reseña:", error);
        return res.status(500).json({ message: "Error interno del servidor al actualizar reseña." });
    }
}

export const deleteReview = async (req, res) => {
    try{
        const reviewId = req.params.reviewId;
        const deletedReview = await deleteReviewById(reviewId);
        if (!deletedReview) {
            return res.status(404).json({ message: "Reseña no encontrada o no pertenece al usuario." });
        }
        return res.status(200).json({ message: "Reseña eliminada exitosamente." });
    }catch(error){
        console.error("Error al eliminar reseña:", error);
        return res.status(500).json({ message: "Error interno del servidor al eliminar reseña." });
    }
}