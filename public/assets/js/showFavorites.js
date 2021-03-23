let maxResultsFav = 0;
let counterFav = 0;
let responseFav;

// eslint-disable-next-line no-unused-vars
const showFavorites = (results) => {
  console.log(results);
  const container = document.getElementById('showFavorites');
  const response = results;
  container.innerHTML = '';

  const options = responseFav.length;

  // 0 = 0; 5 = 0;
  counterFav = maxResultsFav;
  // 0 = 0, 0 < 13 && 0 < 5, 0++;
  for (maxResultsFav = counterFav; counterFav < options && counterFav < maxResultsFav + 5; counterFav++) {
    const exercise = {
      id: response[counterFav].id,
      name: response[counterFav].name,
      equipment: response[counterFav].equipment,
      type: response[counterFav].exercise_type,
      major: response[counterFav].muscle_major,
      minor: response[counterFav].muscle_minor,
      example: response[counterFav].example_link,
      notes: response[counterFav].notes,
      modification: response[counterFav].modifications
    };

    exercise.example = exercise.example.split(')')[0];
    exercise.example = exercise.example.split('(').pop();

    // eslint-disable-next-line no-undef
    newCard(exercise, true);
  };

  const nextBtn = document.createElement('button');
  const prevBtn = document.createElement('button');
  nextBtn.innerHTML = 'Next';
  prevBtn.innerHTML = 'Previous';
  nextBtn.setAttribute('class', 'btn-info nextFav');
  prevBtn.setAttribute('class', 'btn-info previousFav');
  container.append(prevBtn);
  container.append(nextBtn);

  // eslint-disable-next-line no-undef
  prevBtn.addEventListener('click', () => previousFav());
  // eslint-disable-next-line no-undef
  nextBtn.addEventListener('click', () => nextFav());
};

const nextFav = () => {
  if (maxResultsFav + 5 > responseFav.length) {
    showFavorites(responseFav);
  } else {
    maxResultsFav += 5;
    showFavorites(responseFav);
  }
};

const previousFav = () => {
  if (maxResultsFav - 5 < 0) {
    maxResultsFav = 0;
    showFavorites(responseFav);
  } else {
    maxResultsFav -= 5;
    showFavorites(responseFav);
  }
};