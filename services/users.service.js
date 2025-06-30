import models from '../models/index.js';


export const findUserByEmail = async (email) => {
  return await models.User.findOne({ where: { email } });
};

export const createUser = async ({ nombre, email, password }) => {
  return await models.User.create({ nombre, email, password });
};
