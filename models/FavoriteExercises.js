module.exports = (sequelize, DataTypes) => {
  const FavoriteExercises = sequelize.define('FavoriteExercises', {
    UserId: DataTypes.STRING,
    ExerciseId: DataTypes.STRING
  });
};
