const newCard = (exercise) => {
  const div = document.createElement('div');
  const img = document.createElement('img');
  img.setAttribute('src', exercise.example);
  img.setAttribute('class', 'exercise-example');
  div.append(img);

  const name = document.createElement('h4');
  name.innerText = exercise.name;
  div.append(name);

  const hr = document.createElement('hr');
  hr.setAttribute('class','card-line');
  div.append(hr);

  const equipment = document.createElement('p');
  equipment.innerText = exercise.equipment;
  div.append(equipment);

  const type = document.createElement('p');
  type.innerText = exercise.type;
  div.append(type);

  const major = document.createElement('p');
  major.innerText = exercise.major;
  div.append(major);

  const minor = document.createElement('p');
  minor.innerText = exercise.minor;
  div.append(minor);

  const notes = document.createElement('p');
  notes.innerText = exercise.notes;
  div.append(notes);

  const modification = document.createElement('p');
  modification.innerText = exercise.modification;
  div.append(modification);
};

module.exports = newCard();
