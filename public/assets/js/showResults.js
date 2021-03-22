let maxResults = 0;
let counter = 0;
let response;

const showResults = (results) => {
  const container = document.getElementById('exerciselist');
  response = results;
  container.innerHTML = '';

  const options = response.length;

  // 0 = 0; 5 = 0;
  counter = maxResults;
  // 0 = 0, 0 < 13 && 0 < 5, 0++;
  for (maxResults = counter; counter < options && counter < maxResults + 5; counter++) {
    const exercise = {
      id: response[counter].id,
      name: response[counter].name,
      equipment: response[counter].equipment,
      type: response[counter].exercise_type,
      major: response[counter].muscle_major,
      minor: response[counter].muscle_minor,
      example: response[counter].example_link,
      notes: response[counter].notes,
      modification: response[counter].modifications
    };

    exercise.example = exercise.example.split(')')[0];
    exercise.example = exercise.example.split('(').pop();

    // eslint-disable-next-line no-undef
    newCard(exercise);
  };

  const nextBtn = document.createElement('button');
  const prevBtn = document.createElement('button');
  nextBtn.innerHTML = 'Next';
  prevBtn.innerHTML = 'Previous';
  nextBtn.setAttribute('class', 'btn-info next');
  prevBtn.setAttribute('class', 'btn-info previous');
  container.append(prevBtn);
  container.append(nextBtn);

  prevBtn.addEventListener('click', () => previous());
  nextBtn.addEventListener('click', () => next());
};

const next = () => {
  if (maxResults + 5 > response.length) {
    showResults(response);
  } else {
    maxResults += 5;
    showResults(response);
  }
};

const previous = () => {
  if (maxResults - 5 < 0) {
    maxResults = 0;
    showResults(response);
  } else {
    maxResults -= 5;
    showResults(response);
  }
};
