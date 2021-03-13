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
<<<<<<< HEAD
  return exercise;
=======

  return Exercise;
>>>>>>> c611ad73360c49052a0e6fff0158b106e093e2cf
};
