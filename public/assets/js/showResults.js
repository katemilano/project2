let maxResults = 0;
let counter = 0;

const showResults = (results) => {
  const container = document.getElementById('container');

  container.innerHTML = '';

  const options = results.length;

  // 0 = 0; 5 = 0;
  counter = maxResults;
  // 0 = 0, 0 < 13 && 0 < 5, 0++;
  for (maxResults = counter; counter < options && counter < maxResults + 5; counter++) {
    const exercise = {
      name: results[counter].name,
      equipment: results[counter].equipment,
      type: results[counter].type,
      major: results[counter].major,
      minor: results[counter].minor,
      example: results[counter].example,
      notes: results[counter].notes,
      modification: results[counter].modification
    };

    // newCard(exercise);
  };

  const nextBtn = document.createElement('button');
  const prevBtn = document.createElement('button');
  nextBtn.innerHTML = 'Next';
  prevBtn.innerHTML = 'Previous';
  nextBtn.setAttribute('class', 'next');
  prevBtn.setAttribute('class', 'previous');
  nextBtn.setAttribute('onclick', () => next());
  prevBtn.setAttribute('onclick', () => previous());
  container.append(nextBtn);
  container.append(prevBtn);
};

const next = () => {
  maxResults += 5;
  showResults();
};

const previous = () => {
  if (maxResults - 5 < 0) {
    maxResults = 0;
    showResults();
  } else {
    maxResults -= 5;
    showResults();
  }
};
