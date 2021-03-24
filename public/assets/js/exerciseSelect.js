// Variables that relate to a series of checkboxes for what equipment a user has
// These variables will hold a boolean
const bar = document.getElementById('bar-select');
const band = document.getElementById('band-select');
const bodyWeight = document.getElementById('body-weight-select');
const bosuball = document.getElementById('bosu-ball-select');
const cable = document.getElementById('cable-select');
const dumbbells = document.getElementById('dumbbells-select');
const kettlebells = document.getElementById('kettlebells-select');
const landmine = document.getElementById('landmine-select');
const machines = document.getElementById('machines-select');
const medicineBall = document.getElementById('medicine-ball-select');
const platform = document.getElementById('platform-select');
const squatRack = document.getElementById('squat-rack-select');

// Variables that relate to a drop-down select for muscle and exercise type
const type = document.getElementById('exercise-type');
const muscle = document.getElementById('exercise-muscle');

// Variable that relates to the search exercises button
const showUserFavorites = document.getElementById('showTheFavorites');
const submitSpecific = document.getElementById('search-exercises');

// Get request for what exercises the user should see
const ExerciseAPI = {
  getSpecificExercises: (parameters) => {
    return $.ajax({
      url: '/api/exercises',
      type: 'POST',
      data: parameters
    });
  },
  getAllExercises: () => {
    return $.ajax({
      url: '/api/exercises',
      type: 'GET'
    });
  },
  saveToFavorites: (ExerciseId) => {
    return $.ajax({
      url: '/api/favorites',
      type: 'POST',
      data: ExerciseId
    });
  },
  getUserId: () => {
    return $.ajax({
      url: 'api/user',
      type: 'GET'
    }).then((results) => {
      results = JSON.stringify(results);
      return results;
    });
  },
  getFromFavorites: (favoriteId) => {
    return $.ajax({
      url: 'api/favorites/' + favoriteId,
      type: 'GET',
      data: favoriteId
    }).then((results) => {
      return results;
    });
  },
  findTheFavorites: (userId, exercises) => {
    return $.ajax({
      url: 'api/exercises/favorites/ ' + userId,
      type: 'POST',
      data: { 'FavoritedExercises': exercises }
    }).then((results) => {
      return results;
    });
  }
};

// This is a list of the available Equipments needed for Exercises
const handleExerciseSubmit = () => {
  const equipmentArray = [
    {
      name: 'Bar',
      use: bar.checked
    },
    {
      name: 'Band',
      use: band.checked
    },
    {
      name: 'Body Weight',
      use: bodyWeight.checked
    },
    {
      name: 'Bosu Ball',
      use: bosuball.checked
    },
    {
      name: 'Cable',
      use: cable.checked
    },
    {
      name: 'Dumbbells',
      use: dumbbells.checked
    },
    {
      name: 'Kettlebells',
      use: kettlebells.checked
    },
    {
      name: 'Landmine',
      use: landmine.checked
    },
    {
      name: 'Machines',
      use: machines.checked
    },
    {
      name: 'Medicine Ball',
      use: medicineBall.checked
    },
    {
      name: 'Platform',
      use: platform.checked
    },
    {
      name: 'Squat Rack',
      use: squatRack.checked
    }];

  // Creates a new array of only the equipments selected by the user
  const doableWorkouts = equipmentArray.filter(use => use.use === true);

  const sendEquipment = [...new Set(doableWorkouts.map(item => item.name))];

  const findExercise = {
    muscle: muscle.value,
    type: type.value,
    equipment: sendEquipment[0]
  };

  // Sends the data to a post request
  ExerciseAPI.getSpecificExercises(findExercise).then(results => {
    // eslint-disable-next-line no-undef
    showResults(results);
  });
};

// Sending an object to be saved to Favorites Table
const saveThis = (exerciseId) => {
  const saveStuff = {
    ExerciseId: exerciseId
  };
  ExerciseAPI.saveToFavorites(saveStuff);
};

// Click Event for searching for exercises
if (submitSpecific) {
  submitSpecific.addEventListener('click', (e) => {
    e.preventDefault();
    handleExerciseSubmit();
  });
}

// eslint-disable-next-line no-unused-vars
const saveFavorites = (e) => {
  const saveValue = e.currentTarget.value;
  saveThis(saveValue);
};

// Getting favorites table to show information on favorites page
const showMyFavorites = () => {
  // Returns the user id
  ExerciseAPI.getUserId().then((results) => {
    results = results.split(':').pop();
    results = results.split('}')[0];
    // Returns the id's of exercises from that users favorites
    ExerciseAPI.getFromFavorites(results).then((results) => {
      const userId = results[0].UserId;
      const exerciseArray = [];
      results.forEach(element => {
        exerciseArray.push(parseInt(element.ExerciseId));
      });
      // Matches the favorite id's with id from the exercise table
      ExerciseAPI.findTheFavorites(userId, JSON.stringify(exerciseArray)).then((results) => {
        results = JSON.parse(JSON.stringify(results));
        // Displays the results
        // eslint-disable-next-line no-undef
        showFavorites(results);
      });
    });
  });
};

// button click to save things to favorites
showUserFavorites.addEventListener('click', () => {
  showMyFavorites();
});
