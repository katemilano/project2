module.exports = (sequelize, DataTypes) => {
  const exercise = sequelize.define('exercise', {
    name: DataTypes.STRING,
    equipment: DataTypes.STRING,
    exercise_type: DataTypes.STRING,
    muscle_major: DataTypes.STRING,
    muscle_minor: DataTypes.STRING,
    example_link: DataTypes.STRING,
    notes: DataTypes.STRING,
    modifications: DataTypes.STRING
  });

  return exercise;
};
