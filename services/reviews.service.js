import models from "../models/index.js";

export const getReviewsByMovieId = async (movieId) => {
  try {
    const reviews = await models.Review.findAll({
      where: { movieId },
      order: [['createdAt', 'DESC']],
    });

    return reviews;
  } catch (error) {
    console.error('Service | Error fetching reviews:', error);
    throw new Error('Error fetching reviews');
  }
};

export const addNewReview = async (movieId, userId, comment, rating) => {
  try {
    const newReview = await models.Review.create({
      movieId,
      userId,
      comment,
      rating,
    });

    return newReview;
  } catch (error) {
    console.error('Service | Error adding review:', error);
    throw new Error('Error adding review');
  }
}

export const updateReviewById = async (reviewId, userId, comment, rating) => {
  try {
    const review = await models.Review.findOne({
      where: { id: reviewId, userId },
    });

    if (!review) {
      return null;
    }

    review.comment = comment;
    review.rating = rating;
    await review.save();

    return review;
  } catch (error) {
    console.error('Service | Error updating review:', error);
    throw new Error('Error updating review');
  }
}

export const deleteReviewById = async (reviewId) => {
    try{
        const deletedReview = await models.Review.destroy({
            where: { id: reviewId }
        });
        if (!deletedReview) {
            return null;
        }
        return deletedReview;
    }catch (error) {
        console.error('Service | Error deleting review:', error);
        throw new Error('Error deleting review');
    }
}