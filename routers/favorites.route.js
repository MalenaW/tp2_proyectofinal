import { Router } from 'express';
import {
  agregarFavorito,
  eliminarFavorito,
  listarFavoritos
} from '../controllers/favorites.controller.js';
import { authenticateToken } from '../middlewares/auth.js';


const router = Router();

router.post('/:movieId', authenticateToken, agregarFavorito);
router.delete('/:movieId', authenticateToken, eliminarFavorito);
router.get('/', authenticateToken, listarFavoritos);

export default router;

