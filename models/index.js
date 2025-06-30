import { Sequelize } from 'sequelize';
import { getSequelize } from '../database/db.js';

import UserModel from './User.js';
import ReviewModel from './Review.js';
import FavoriteModel from './Favorite.js';

const sequelize = getSequelize();

const models = {
  User: UserModel(sequelize, Sequelize.DataTypes),
  Review: ReviewModel(sequelize, Sequelize.DataTypes),
  Favorite: FavoriteModel(sequelize, Sequelize.DataTypes),
};


Object.values(models).forEach((model) => {
  if (model.associate) {
    model.associate(models);
  }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

export default models;
