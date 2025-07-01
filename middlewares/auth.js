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
