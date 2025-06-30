import { Router } from 'express';
import { registerUser, loginUser } from '../controllers/users.controller.js';
import { authenticateToken } from '../middleware/auth.middleware.js';

const router = Router();

router.post('/register', registerUser);
router.post('/login', loginUser);

router.get('/profile', authenticateToken, (req, res) => {
  res.json({ 
    message: 'Perfil del usuario autenticado',
    user: req.user 
  });
});

export default router;
