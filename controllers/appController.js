module.exports = function (db) {
  return {
    // Get all examples
    getExamples: function (req, res) {
      db.Example.findAll({ where: { UserId: req.session.passport.user.id } }).then(function (dbExamples) {
        res.json(dbExamples);
      });
    },
    // Create a new example
    createExample: function (req, res) {
      db.Example.create(req.body).then(function (dbExample) {
        res.json(dbExample);
      });
    },
    // Delete an example by id
    deleteExample: function (req, res) {
      db.Example.destroy({ where: { id: req.params.id } }).then(function (dbExample) {
        res.json(dbExample);
      });
    },

    // get all exercises
    getAllExercises: function (req, res) {
      db.Exercise.findAll({}).then(function (exercises) { res.json(exercises); });
    },

    // get specific exercises
    getSpecificExercises: function (req, res) {
      const filter = {
        major_muscle: req.body.muscle,
        exercise_type: req.body.type,
        equipment: req.body.equipment
      };
      db.Exercise.findAll({
        where: filter }).then(function (exercises) {
        res.json(exercises);
      });
    } };
};
