const newCard = (exercise) => {
  const div = document.createElement('div');
  const img = document.createElement('img');
  img.setAttribute('src', exercise.example);
  img.setAttribute('class', 'exercise-example');
  div.append(img);

};

module.exports = newCard();
