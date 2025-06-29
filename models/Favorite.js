export default (sequelize, DataTypes) => {
  const Favorite = sequelize.define('Favorite', {
    userId: { type: DataTypes.INTEGER, primaryKey: true },
    movieId: { type: DataTypes.INTEGER, primaryKey: true },
    title: { type: DataTypes.STRING, allowNull: false },
    overview: { type: DataTypes.TEXT },
    posterPath: { type: DataTypes.STRING },
    releaseDate: { type: DataTypes.STRING },
    voteAverage: { type: DataTypes.FLOAT }
  }, {
    timestamps: true,
    updatedAt: false
  });

  Favorite.associate = (models) => {
    Favorite.belongsTo(models.User, { foreignKey: 'userId' });
  };

  return Favorite;
};
