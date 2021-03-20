// eslint-disable-next-line no-unused-vars
const newCard = (exercise) => {
  const container = document.getElementById('container');
  const div = document.createElement('div');
  const img = document.createElement('img');
  img.setAttribute('src', exercise.example);
  img.setAttribute('class', 'exercise-example');
  div.append(img);

  const name = document.createElement('h4');
  name.innerText = exercise.name;
  name.setAttribute('class', 'card-text');
  div.append(name);

  const hr = document.createElement('hr');
  hr.setAttribute('class', 'card-line');
  div.append(hr);

  const equipment = document.createElement('p');
  equipment.innerText = exercise.equipment;
  equipment.setAttribute('class', 'card-text');
  div.append(equipment);

  const type = document.createElement('p');
  type.innerText = exercise.type;
  type.setAttribute('class', 'card-text');
  div.append(type);

  const major = document.createElement('p');
  major.innerText = exercise.major;
  major.setAttribute('class', 'card-text');
  div.append(major);

  const minor = document.createElement('p');
  minor.innerText = exercise.minor;
  minor.setAttribute('class', 'card-text');
  div.append(minor);

  const notes = document.createElement('p');
  notes.innerText = exercise.notes;
  notes.setAttribute('class', 'card-text');
  div.append(notes);

  const modification = document.createElement('p');
  modification.innerText = exercise.modification;
  modification.setAttribute('class', 'card-text');
  div.append(modification);

  const saveFav = document.createElement('button');
  saveFav.innerText = 'Save to Favorites';
  saveFav.setAttribute('id', exercise.id);
  saveFav.setAttribute('class', 'save-to-favorites');
  div.append(saveFav);

  container.append(div);
};
