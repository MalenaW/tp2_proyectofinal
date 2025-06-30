import models from '../models/index.js';


export const findUserByEmail = async (email) => {
  try{
    const user = await models.User.findOne({ where: { email } });
    return user; 
  }catch(error) {
    console.error('Error al buscar usuario por email:', error);
    throw error;
  }
};

export const createUser = async ({ nombre, email, password }) => {
  try{
    const user = await models.User.create({ nombre, email, password });
    return user;
  }catch(error) {
    console.error('Error al crear usuario:', error);
    throw error;
  }
};
