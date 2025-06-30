import { Router } from 'express';
import {
  agregarFavorito,
  eliminarFavorito,
  listarFavoritos
} from '../controllers/favorites.controller.js';

const router = Router();

router.post('/:movieId', agregarFavorito);
router.delete('/:movieId', eliminarFavorito);
router.get('/', listarFavoritos);

export default router;

