module.exports = (sequelize, DataTypes) => {
  const FavoriteExercises = sequelize.define('FavoriteExercises', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    UserId: DataTypes.STRING,
    ExerciseId: DataTypes.STRING
  });

  return FavoriteExercises;
};
