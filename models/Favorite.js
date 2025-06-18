export default (sequelize, DataTypes) => {
  const Favorite = sequelize.define('Favorite', {
    userId: { type: DataTypes.INTEGER, primaryKey: true },
    movieId: { type: DataTypes.INTEGER, primaryKey: true }
  }, {
    timestamps: true,
    updatedAt: false
  });

  Favorite.associate = (models) => {
    Favorite.belongsTo(models.User, { foreignKey: 'userId' });
  };

  return Favorite;
};
