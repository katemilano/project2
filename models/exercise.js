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
    Exercise.belongsToMany(models.User, {
      through: 'UserFavorite',
      foreignKey: 'ExerciseId' });
  };

  return Exercise;
};
