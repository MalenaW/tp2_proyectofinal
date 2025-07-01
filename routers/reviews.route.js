import { Router } from 'express';
import {
    listReviewsByMovieId,
    addReview,
    updateReview,
    deleteReview
} from '../controllers/reviews.controller.js';

const router = Router();

router.get('/:movieId', listReviewsByMovieId);
router.post('/new/:movieId', addReview);
router.put('/:reviewId', updateReview);
router.delete('/:reviewId', deleteReview);

export default router;

