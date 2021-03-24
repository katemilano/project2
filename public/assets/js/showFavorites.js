let maxResultsFav = 0;
let counterFav = 0;
let responseFav;

// eslint-disable-next-line no-unused-vars
const showFavorites = (results) => {
  const container = document.getElementById('showFavorites');
  responseFav = results;
  container.innerHTML = '';

  const options = responseFav.length;

  // 0 = 0; 5 = 0;
  counterFav = maxResultsFav;
  // 0 = 0, 0 < 13 && 0 < 5, 0++;
  for (maxResultsFav = counterFav; counterFav < options && counterFav < maxResultsFav + 5; counterFav++) {
    const exercise = {
      id: responseFav[counterFav].id,
      name: responseFav[counterFav].name,
      equipment: responseFav[counterFav].equipment,
      type: responseFav[counterFav].exercise_type,
      major: responseFav[counterFav].muscle_major,
      minor: responseFav[counterFav].muscle_minor,
      example: responseFav[counterFav].example_link,
      notes: responseFav[counterFav].notes,
      modification: responseFav[counterFav].modifications
    };
    // Formats image to display
    exercise.example = exercise.example.split(')')[0];
    exercise.example = exercise.example.split('(').pop();

    // eslint-disable-next-line no-undef
    newCard(exercise, true);
  };

  // Append Next and Previous Buttons
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

// Function for showing next 5 favorite Exercises
const nextFav = () => {
  if (maxResultsFav + 5 > responseFav.length) {
    showFavorites(responseFav);
  } else {
    maxResultsFav += 5;
    showFavorites(responseFav);
  }
};

// Function for showing previous 5 favorites Exercises
const previousFav = () => {
  if (maxResultsFav - 5 < 0) {
    maxResultsFav = 0;
    showFavorites(responseFav);
  } else {
    maxResultsFav -= 5;
    showFavorites(responseFav);
  }
};
