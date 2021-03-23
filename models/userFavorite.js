
module.exports = function (sequelize, DataTypes) {
  const UserFavorite = sequelize.define('UserFavorite', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    UserId: {
      type: DataTypes.STRING,
      references: {
        model: 'User',
        key: 'id'
      }
    },
    ExerciseId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Exercise',
        key: 'id'
      }
    }
  });

  UserFavorite.associate = (models) => {
    UserFavorite.belongsTo(models.User, {
      through: 'User',
      foreignKey: 'ExerciseId'
    });
  };

  UserFavorite.associate = (models) => {
    UserFavorite.belongsToMany(models.Exercise, {
      through: 'FavoriteExercises',
      foreignKey: 'ExerciseId',
      otherKey: 'UserId'
    });
  };

  return UserFavorite;
};
