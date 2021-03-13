const bar = document.getElementById('bar-select');
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
  getExercise: () => {
    return $.ajax({
      url: 'api/exercises',
      type: 'GET'
    });
  }
};

const handleExerciseSubmit = (e) => {
  e.preventDefault();

  const filter = {
    muscle: muscle.val(),
    type: type.val(),
    equipment: muscle.val()
  };

  ExerciseAPI.getExercise(filter).then(() => {

  });
};
