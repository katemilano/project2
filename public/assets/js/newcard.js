// eslint-disable-next-line no-unused-vars
const newCard = (exercise, alreadyFavorite) => {
  const container = document.getElementById('exerciselist');
  const div = document.createElement('div');
  const img = document.createElement('img');

  const name = document.createElement('h4');
  name.innerText = exercise.name;
  name.setAttribute('class', 'card-text');
  div.append(name);

  const hr = document.createElement('hr');
  hr.setAttribute('class', 'card-line');
  div.append(hr);
  div.setAttribute('class', 'exerciseList');
  img.setAttribute('src', exercise.example);
  img.setAttribute('class', 'exercise-example');
  div.append(img);

  const equipment = document.createElement('p');
  equipment.innerHTML = '<i><strong>Equipment: </strong></i>' + exercise.equipment;
  equipment.setAttribute('class', 'card-text');
  div.append(equipment);

  const type = document.createElement('p');
  type.innerHTML = '<i><strong>Type: </strong></i>' + exercise.type;
  type.setAttribute('class', 'card-text');
  div.append(type);

  const major = document.createElement('p');
  major.innerHTML = '<i><strong>Major Muscle: </strong></i>' + exercise.major;
  major.setAttribute('class', 'card-text');
  div.append(major);

  const minor = document.createElement('p');
  minor.innerHTML = '<i><strong>Minor Muscle: </strong></i>' + exercise.minor;
  minor.setAttribute('class', 'card-text');
  div.append(minor);

  const notes = document.createElement('p');
  notes.innerHTML = '<i><strong>Notes: </strong></i>' + exercise.notes;
  notes.setAttribute('class', 'card-text');
  div.append(notes);

  const modification = document.createElement('p');
  modification.innerHTML = '<i><strong>Modifications: </strong></i>' + exercise.modification;
  modification.setAttribute('class', 'card-text');
  div.append(modification);

  if (!alreadyFavorite) {
    const saveFav = document.createElement('button');
    saveFav.innerText = 'Save to Favorites';
    saveFav.setAttribute('class', 'btn-info save-to-favorites');
    saveFav.setAttribute('value', exercise.id);
    saveFav.setAttribute('onclick', 'saveFavorites(event)');
    div.append(saveFav);
  };

  if (alreadyFavorite) {
    const deleteFav = document.createElement('button');
    deleteFav.innerText = 'Delete from Favorites';
    deleteFav.setAttribute('value', exercise.id);
    deleteFav.setAttribute('class', 'delete-from-favorites');
    div.append(deleteFav);
  }

  container.append(div);
};
