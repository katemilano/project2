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
      db.Exercise.findAll({}).then(function (exercises) {
        res.json(exercises);
      });
    },

    // search specific exercises
    getSpecificExercises: (req, res) => {
      console.log('search request received');

      // variables to search for anything or specifics
      let majorMuscle = req.body.muscle;
      if (req.body.muscle === 'All Selector') {
        majorMuscle = '';
      };

      let exerciseType = req.body.type;
      if (req.body.type === 'All Type') {
        exerciseType = '';
      };

      db.Exercise.findAll({
        where: {
          [Sequelize.Op.and]: [
            {
              muscle_major: {
                [Sequelize.Op.like]: `%${majorMuscle}%`
              }
            },
            {
              exercise_type: {
                [Sequelize.Op.like]: `%${exerciseType}%`
              }
            },
            {
              equipment: {
                [Sequelize.Op.like]: `%${req.body.equipment}%`
              }
            }
          ]
        }
      }).then(function (exercises) {
        res.json(exercises);
      });
    },

    // save favorite workout to user
    saveToFavorites: (req, res) => {
      db.UserFavorite.create({
        UserId: req.session.passport.user.id,
        // replace req.body with
        ExerciseId: req.body.ExerciseId
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
    },

    // check UserFavorite table by userID in order to get exerciseIDs saved to favorites
    readFavorites: (req, res) => {
      db.UserFavorite.findAll({
        where: {
          UserId: req.params.id
        }
      }).then(function (userFavorites) {
        res.json(userFavorites);
      });
    },

    // grab all of the information about the exercises that a user had saved to favorites after these IDs are returned to DB
    readExerciseId: (req, res) => {
      const newFormat = JSON.parse(req.body.FavoritedExercises);
      const exercisesArray = [];
      newFormat.forEach(ids => exercisesArray.push(ids));
      db.Exercise.findAll({
        where: {
          id: {
            [Sequelize.Op.or]: exercisesArray
          }
        }
      }).then(function (favoriteExercises) { res.json(favoriteExercises); });
    },

    // get user id in order to let users search by favorite
    getUserId: (req, res) => {
      res.json({ UserId: req.session.passport.user.id });
    },

    // delete an exercise from favorites
    deleteFavorite: (req, res) => {
      db.UserFavorite.destroy({
        where: {
          id: req.params.id
        }
      }).then(function () { res.status(200).end(); });
    }
  };
};
