import models from '../models/index.js';

export const getAllUsers = async (req, res) => {
  try {
    const users = await models.User.findAll({
      attributes: ['id', 'nombre', 'email', 'role', 'createdAt']
    });

    res.json({
      message: 'Lista de todos los usuarios',
      users,
      total: users.length
    });
  } catch (error) {
    console.error('Error al obtener usuarios:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};

export const deleteAnyReview = async (req, res) => {
  const { reviewId } = req.params;

  try {
    const review = await models.Review.findByPk(reviewId);

    if (!review) {
      return res.status(404).json({ message: 'Review no encontrada' });
    }

    await review.destroy();

    res.json({
      message: `Review eliminada por administrador`,
      deletedReview: {
        id: review.id,
        comment: review.comment,
        adminWhoDeleted: req.user.email
      }
    });
  } catch (error) {
    console.error('Error al eliminar review:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};