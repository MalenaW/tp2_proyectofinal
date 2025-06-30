import jwt from 'jsonwebtoken';

export const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; 

  if (!token) {
    return res.status(401).json({ message: 'Token de acceso requerido.' });
  }

  jwt.verify(token, process.env.JWT_SECRET || 'clave_fija_para_tp_2024', (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Token inválido o expirado.' });
    }

    req.user = {
      id: user.id,
      email: user.email,
      role: user.role
    };

    next();
  });
}; 