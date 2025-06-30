import models from '../models/index.js';
import bcrypt from 'bcrypt';

export const registerUser = async (req, res) => {
  const { nombre, email, password } = req.body;

  try {
    if (!nombre || !email || !password) {
      return res.status(400).json({ message: 'Faltan campos requeridos.' });
    }

    const existente = await models.User.findOne({ where: { email } });
    if (existente) {
      return res.status(400).json({ message: 'Ese email ya está registrado.' });
    }

    const nuevoUsuario = await models.User.create({
      nombre,
      email,
      password
    });
    

    res.status(201).json({
      message: 'Usuario registrado con éxito',
      user: {
        id: nuevoUsuario.id,
        nombre: nuevoUsuario.nombre,
        email: nuevoUsuario.email,
        role: nuevoUsuario.role
      }
    });

  } catch (error) {
    console.error('Error en registro:', error);
    res.status(500).json({ message: 'Error interno del servidor.' });
  }
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await models.User.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({ message: 'Usuario no encontrado.' });
    }

    
    const passwordValida = await bcrypt.compare(password, user.password);
    

    if (!passwordValida) {
      return res.status(401).json({ message: 'Contraseña incorrecta.' });
    }

    res.status(200).json({ message: 'Inicio de sesión exitoso.', user });
    
  } catch (error) {
    console.error('Error en inicio de sesión:', error);
    res.status(500).json({ message: 'Error interno del servidor.' });
  }
}
