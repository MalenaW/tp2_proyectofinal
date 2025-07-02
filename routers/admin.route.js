import { Router } from 'express';
import { 
  getAllUsers, 
  deleteAnyReview, 
} from '../controllers/admin.controller.js';
import { requireAdminAuth } from '../middlewares/auth.js';

const router = Router();

router.use(requireAdminAuth);

router.get('/users', getAllUsers);
router.delete('/reviews/:reviewId', deleteAnyReview);

export default router; 