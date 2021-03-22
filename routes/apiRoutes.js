const router = require('express').Router();
const ensureAuthenticated = require('../middlewares/ensureAuthenticated');

module.exports = (passport, db) => {
  const AuthController = require('../controllers/authController')(passport, db);
  const AppController = require('../controllers/appController')(db);

  // Authentication
  router.post('/register', AuthController.register);
  router.post('/login', AuthController.login);
  router.get('/logout', AuthController.logout);
  router.put('/user/:id', ensureAuthenticated, AuthController.updateUser);
  router.delete('/user/:id', ensureAuthenticated, AuthController.deleteUser);
  router.post('/user/confirm', AuthController.confirmAuth);

  // App
  router.get('/create', AppController.getExamples);
  router.post('/create', AppController.createExample);
  router.delete('/create/:id', AppController.deleteExample);

  // search for exercises
  router.get('/exercises', AppController.getAllExercises);

  // search for specific exercises
  router.post('/exercises', AppController.getSpecificExercises);

  // test for random exercise
  router.get('/random-exercise', AppController.getRandom);

  // save exercise to user favorites
  router.post('/favorites', AppController.saveToFavorites);

  // read user favorites
  router.get('/favorites/:id', AppController.readFavorites);

  // return all favorited exercises
  router.post('/exercises/favorites/:id', AppController.readExerciseId);

  // route to get user id to send to front end
  router.get('/user', AppController.getUserId);

  // route to remove favorite
  router.delete('/exercises/favorites/:id', AppController.deleteFavorite);

  return router;
};
