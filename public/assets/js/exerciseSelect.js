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
const type = document.getElementById('#exercise-type');
const muscle = document.getElementById('#exercise-muscle');

const ExerciseAPI = {
  getExercise: (parameters) => {
    return $.ajax({
      url: 'api/exercises',
      type: 'POST',
      data: JSON.stringify(parameters)
    });
  }
};

const handleExerciseSubmit = (e) => {
  e.preventDefault();

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

  const doableWorkouts = equipmentArray.filter(use => use === true);

  const findExercise = {
    muscle: muscle.val(),
    type: type.val(),
    equipment: doableWorkouts
  };

  ExerciseAPI.getExercise(findExercise);
};

handleExerciseSubmit();
