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
const submitSpecific = document.getElementById('search-exercises');
const save = document.getElementsByClassName('save-to-favorites');

// Shows all exercises
// const submitAll = document.getElementById('search-all');

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
      url: 'api/exercises',
      type: 'GET'
    });
  },
  saveToFavorites: (favoriteId) => {
    return $.ajax({
      url: 'api/favorites',
      type: 'POST',
      data: favoriteId
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
  console.log('send equipment' + sendEquipment);

  const findExercise = {
    muscle: muscle.value,
    type: type.value,
    equipment: sendEquipment[0]
  };

  console.log('Find Exercise', findExercise);

  // Sends the data to a post request
  console.log(findExercise);
  ExerciseAPI.getSpecificExercises(findExercise).then(results => {
    // eslint-disable-next-line no-undef
    showResults(results, false);
  });
};

const saveThis = (exerciseId) => {
  const saveStuff = {
    ExerciseId: exerciseId
  };
  console.log(saveStuff);

  ExerciseAPI.saveToFavorites(saveStuff).then(results => {
    // eslint-disable-next-line no-undef
    showResults(results, true);
  });
};

// const handleAllSubmit = () => {
//   ExerciseAPI.getAllExercises();
// };

// Click Event for searching for exercises
if (submitSpecific) {
  submitSpecific.addEventListener('click', (e) => {
    e.preventDefault();
    handleExerciseSubmit();
  });
}

for (let i = 0; i < save.length; i++) {
  save[i].addEventListener('click', (e) => {
    console.log(i);
    e.preventDefault();
    saveThis(this.save.value);
  });
}
// submitAll.addEventListener('click', (e) => {
//   e.preventDefault();
//   handleAllSubmit();
// });
