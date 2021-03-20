// const User = require('./user.js');
// const Exercise = require('./exercise.js');

module.exports = function (sequelize, DataTypes) {
  const UserFavorite = sequelize.define('UserFavorite', {
    UserId: {
      type: DataTypes.STRING,
      references: {
        model: 'User', // 'Movies' would also work
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
