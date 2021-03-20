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
      console.log('request received', req.body);
      // req.body.equipment.forEach
      db.Exercise.findAll({
        where: {
          [Sequelize.Op.and]: [
            {
              muscle_major: {
                [Sequelize.Op.like]: `%${req.body.muscle}%`
              }
            },
            {
              exercise_type: {
                [Sequelize.Op.like]: `%${req.body.type}%`
              }
            },
            {
              equipment: {
                [Sequelize.Op.like]: `%${req.body.equipment}%`
              }
            }
          ] }
      }).then(function (exercises) {
        console.log('Heres the response', exercises);
        res.json(exercises);
      });
    },

    // save favorite workout to user
    saveToFavorites: (req, res) => {
      db.UserFavorite.create({
        UserId: req.session.userid,
        ExerciseId: req.body.exercise
      }).then(function (savedList) {
        res.json(savedList);
      });
    },

    // get random workout
    getRandom: (req, res) => {
      const randomExerciseId = Math.floor(Math.random() * 101);
      db.Exercise.findOne({
        where: {
          id: randomExerciseId
        }
      }).then(function (randomExercise) {
        res.json(randomExercise);
      });
    }

  };
};
