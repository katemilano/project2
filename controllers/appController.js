const Sequelize = require('sequelize');
module.exports = function (db) {
  return {
    // Get all examples
    getExamples: (req, res) => {
      db.Example.findAll({ where: { UserId: req.session.passport.user.id } }).then(function (dbExamples) {
        res.json(dbExamples);
      });
    },
    // Create a new example
    createExample: (req, res) => {
      db.Example.create(req.body).then(function (dbExample) {
        res.json(dbExample);
      });
    },
    // Delete an example by id
    deleteExample: (req, res) => {
      db.Example.destroy({ where: { id: req.params.id } }).then(function (dbExample) {
        res.json(dbExample);
      });
    },

    // get all exercises
    getAllExercises: (req, res) => {
      db.Exercise.findAll({}).then(function (exercises) { res.json(exercises); });
    },

    // get specific exercises
    getSpecificExercises: (req, res) => {
      // const filter = {
      //  muscle_major: req.body.muscle,
      //   exercise_type: req.body.type,
      //   equipment: req.body.equipment
      // };

      db.Exercise.findAll({
        where: {
          [Sequelize.Op.or]: [{ muscle_major: req.body.muscle }, { exercise_type: req.body.type }]
        }
      }).then(function (exercises) {
        res.json(exercises);
      });

      // db.Exercise.findAll({
      //   where: filter }).then(function (exercises) {
      //   res.json(exercises);
      // });
    } };
};
