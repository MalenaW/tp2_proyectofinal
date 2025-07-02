import jwt from 'jsonwebtoken';
import config from '../config/dotenv.config.js';

export const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; 

  if (!token) return res.status(401).json({ message: 'Token requerido' });

  jwt.verify(token, config.jwt.secret, (err, user) => {
    if (err) return res.status(403).json({ message: 'Token inválido' });

    req.user = user; 
    next();
  });
};

export const requireAdmin = (req, res, next) => {
  if (!req.user) {
    return res.status(401).json({ message: 'Usuario no autenticado' });
  }

  if (req.user.role !== 'admin') {
    return res.status(403).json({ 
      message: 'Acceso denegado. Solo administradores pueden realizar esta acción.',
      requiredRole: 'admin',
      userRole: req.user.role 
    });
  }

  next();
};

export const requireAdminAuth = [authenticateToken, requireAdmin];
