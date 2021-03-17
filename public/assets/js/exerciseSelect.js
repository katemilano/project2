const showResults = require('./showResults');

// Variables that relate to a series of checkboxes for what equipment a user has
// These variables will hold a boolean
const bar = document.getElementById('bar-select');
const band = document.getElementById('band-select');
const bodyWeight = document.getElementById('body-weight-select');
const bosuball = document.getElementById('bosuball-select');
const cable = document.getElementById('cable-select');
const dumbbells = document.getElementById('dumbells-select');
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

// Shows all exercises
const submitAll = document.getElementById('search-all');

// Get request for what exercises the user should see
const ExerciseAPI = {
  getSpecificExercises: (parameters) => {
    return $.ajax({
      url: 'api/exercises',
      type: 'GET',
      data: JSON.stringify(parameters)
    });
  },
  getAllExercises: () => {
    return $.ajax({
      url: 'api/exercises',
      type: 'GET'
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
  let doableWorkouts = equipmentArray.filter(use => use === true);

  // Removes the use status from the doableWorkouts array
  doableWorkouts.forEach(element => {
    delete element.use;
  });

  // Converts the object to an array
  doableWorkouts = JSON.stringify(doableWorkouts);

  const findExercise = {
    muscle: muscle.val(),
    type: type.val(),
    equipment: doableWorkouts
  };
  // Sends the data to a post request
  ExerciseAPI.getSpecificExercises(findExercise).then(results => {
    showResults(results);
  });
};

const handleAllSubmit = () => {
  ExerciseAPI.getAllExercises();
};

// Click Event for searching for exercises
submitSpecific.addEventListener('click', (e) => {
  e.preventDefault();
  handleExerciseSubmit();
});

submitAll.addEventListener('click', (e) => {
  e.preventDefault();
  handleAllSubmit();
});
