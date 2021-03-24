// eslint-disable-next-line no-unused-vars
const newCard = (exercise, alreadyFav) => {
  const container = document.getElementById('exerciselist');
  const favContainer = document.getElementById('showFavorites');
  const div = document.createElement('div');
  const img = document.createElement('img');

  // Display Exercise Name
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

  // Display Equipment Name
  const equipment = document.createElement('p');
  equipment.innerHTML = '<i><strong>Equipment: </strong></i>' + exercise.equipment;
  equipment.setAttribute('class', 'card-text');
  div.append(equipment);

  // Dispay Exercise Type
  const type = document.createElement('p');
  type.innerHTML = '<i><strong>Type: </strong></i>' + exercise.type;
  type.setAttribute('class', 'card-text');
  div.append(type);

  // Display Exercise Major Muscle
  const major = document.createElement('p');
  major.innerHTML = '<i><strong>Major Muscle: </strong></i>' + exercise.major;
  major.setAttribute('class', 'card-text');
  div.append(major);

  // Display Exercise Minor Muscle
  const minor = document.createElement('p');
  minor.innerHTML = '<i><strong>Minor Muscle: </strong></i>' + exercise.minor;
  minor.setAttribute('class', 'card-text');
  div.append(minor);

  // If there are Exercise Notes Display Notes
  if (exercise.notes) {
    const notes = document.createElement('p');
    notes.innerHTML = '<i><strong>Notes: </strong></i>' + exercise.notes;
    notes.setAttribute('class', 'card-text');
    div.append(notes);
  }

  // If there are Exercise Modifications Display Modifications
  if (exercise.modification) {
    const modification = document.createElement('p');
    modification.innerHTML = '<i><strong>Modifications: </strong></i>' + exercise.modification;
    modification.setAttribute('class', 'card-text');
    div.append(modification);
  }

  // If they are on favorites page Don't Show Save Favorites Button
  if (!alreadyFav) {
    const saveFav = document.createElement('button');
    saveFav.innerText = 'Save to Favorites';
    saveFav.setAttribute('class', 'btn-info save-to-favorites');
    saveFav.setAttribute('value', exercise.id);
    saveFav.setAttribute('onclick', 'saveFavorites(event)');
    saveFav.innerText = 'Save to Favorites';
    div.append(saveFav);
  }

  // If We are in Exercise Select Append There
  if (container) { container.append(div); };
  // If We are in Favorites Append There
  if (favContainer) { favContainer.append(div); };
};
