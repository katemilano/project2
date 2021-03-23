
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

  return UserFavorite;
};
