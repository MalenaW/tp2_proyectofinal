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

    const passwordHasheado = await bcrypt.hash(password, 10);

    const nuevoUsuario = await models.User.create({
      nombre,
      email,
      password: passwordHasheado
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
