import { Router } from 'express';
import {
    listReviewsByMovieId,
    addReview,
    updateReview,
    deleteReview
} from '../controllers/reviews.controller.js';
import { authenticateToken } from '../middlewares/auth.js';

const router = Router();

router.get('/:movieId', listReviewsByMovieId);
router.post('/new/:movieId', authenticateToken, addReview);
router.put('/:reviewId', authenticateToken, updateReview);
router.delete('/:reviewId', authenticateToken, deleteReview);

export default router;

