export default (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    nombre: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    password: { type: DataTypes.STRING, allowNull: false },
    role: { type: DataTypes.ENUM('user', 'admin'), defaultValue: 'user' }
  });

  User.associate = (models) => {
    User.hasMany(models.Review, { foreignKey: 'userId' });
    User.hasMany(models.Favorite, { foreignKey: 'userId' });
  };

  return User;
};
