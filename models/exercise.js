module.exports = (sequelize, DataTypes) => {
  const Exercise = sequelize.define('Exercise', {
    name: DataTypes.STRING,
    equipment: DataTypes.STRING,
    exercise_type: DataTypes.STRING,
    muscle_major: DataTypes.STRING,
    muscle_minor: DataTypes.STRING,
    example_link: DataTypes.STRING,
    notes: DataTypes.STRING,
    modifications: DataTypes.STRING
  });

  Exercise.associate = (models) => {
    Exercise.belongsTo(models.User, {
      through: 'UserFavorite',
      foreignKey: 'ExerciseId' });
  };

  Exercise.associate = (models) => {
    Exercise.belongsToMany(models.UserFavorite, {
      through: 'FavoriteExercises',
      foreignKey: 'UserId',
      otherKey: 'ExerciseId'
    });
  };

  return Exercise;
};
