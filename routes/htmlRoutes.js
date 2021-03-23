const router = require('express').Router();

module.exports = (db) => {
  // Load register page
  router.get('/register', (req, res) => {
    if (req.isAuthenticated()) {
      res.redirect('/profile');
    } else {
      res.render('register');
    }
  });

  // Load favorites page
  router.get('/favorites', (req, res) => {
    if (req.isAuthenticated()) {
      db.User.findOne({
        where: {
          id: req.session.passport.user.id
        }
      }).then(() => {
        const user = {
          userInfo: req.session.passport.user,
          isloggedin: req.isAuthenticated()
        };
        // console.log(user);
        res.render('favorites', user);
      });
    } else {
      res.redirect('/');
    }
  });

  // Load settings page
  router.get('/settings', (req, res) => {
    if (req.isAuthenticated()) {
      db.User.findOne({
        where: {
          id: req.session.passport.user.id
        }
      }).then(() => {
        const user = {
          userInfo: req.session.passport.user,
          isloggedin: req.isAuthenticated()
        };
        // console.log(user);
        res.render('settings', user);
      });
    } else {
      res.redirect('/');
    }
  });

  // Load dashboard page
  router.get('/', (req, res) => {
    const randomExerciseId = Math.floor(Math.random() * 101);
    db.Exercise.findOne({
      where: {
        id: randomExerciseId
      }
    }).then(function (randomExercise) {
      let newUrl = randomExercise.example_link;
      newUrl = newUrl.split(')')[0];
      newUrl = newUrl.split('(').pop();

      if (req.isAuthenticated()) {
        const user = {
          user: req.session.passport.user,
          isloggedin: req.isAuthenticated(),
          exercise: randomExercise.dataValues,
          exerciseUrl: newUrl
        };
        console.log(user);
        res.render('dashboard', user);
      } else {
        const user = {
          exercise: randomExercise.dataValues,
          exerciseUrl: newUrl
        };
        res.render('dashboard', user);
      }
    });
  });

  // Load dashboard page
  router.get('/dashboard', (req, res) => {
    const randomExerciseId = Math.floor(Math.random() * 101);
    db.Exercise.findOne({
      where: {
        id: randomExerciseId
      }
    }).then(function (randomExercise) {
      let newUrl = randomExercise.example_link;
      newUrl = newUrl.split(')')[0];
      newUrl = newUrl.split('(').pop();

      if (req.isAuthenticated()) {
        const user = {
          user: req.session.passport.user,
          isloggedin: req.isAuthenticated(),
          exercise: randomExercise.dataValues,
          exerciseUrl: newUrl
        };
        console.log(user);
        res.render('dashboard', user);
      } else {
        const user = {
          exercise: randomExercise.dataValues,
          exerciseUrl: newUrl
        };
        res.render('dashboard', user);
      }
    });
  });

  router.get('/favorites', function (req, res) {
    if (req.isAuthenticated()) {
      db.UserFavorite.findAll({ where: { UserId: req.session.passport.user.id }, raw: true }).then(function (dbFavorites) {
        res.render('favorites', {
          userInfo: req.session.passport.user,
          isloggedin: req.isAuthenticated(),
          favorites: dbFavorites

        });
      });
    }
  });

  // Load example index page
  router.get('/create', function (req, res) {
    if (req.isAuthenticated()) {
      db.Example.findAll({ where: { UserId: req.session.passport.user.id }, raw: true }).then(function (dbExamples) {
        res.render('create', {
          userInfo: req.session.passport.user,
          isloggedin: req.isAuthenticated(),
          msg: 'Welcome!',
          examples: dbExamples

        });
      });
    } else {
      res.redirect('/');
    }
  });

  // Load example page and pass in an example by id
  router.get('/create/:id', function (req, res) {
    if (req.isAuthenticated()) {
      db.Example.findOne({ where: { id: req.params.id }, raw: true }).then(function (dbExample) {
        res.render('example-detail', {
          userInfo: req.session.passport.user,
          isloggedin: req.isAuthenticated(),
          example: dbExample
        });
      });
    } else {
      res.redirect('/');
    }
  });

  // Logout
  router.get('/logout', (req, res, next) => {
    req.logout();
    req.session.destroy((err) => {
      if (err) {
        return next(err);
      }
      res.clearCookie('connect.sid', { path: '/' });
      res.redirect('/');
    });
  });

  // Render 404 page for any unmatched routes
  router.get('*', function (req, res) {
    res.render('404');
  });

  router.get('/home', (req, res) => {
    const randomExerciseId = Math.floor(Math.random() * 101);
    db.Exercise.findOne({
      where: {
        id: randomExerciseId
      }
    }).then(function (randomExercise) {
      res.render('random', randomExercise);
    });
  });

  return router;
};
