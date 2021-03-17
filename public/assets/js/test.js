const exercise = {
    name: 'Arnold Press',
    equipment: 'Dumbells',
    type: 'weight',
    major: 'Bicep',
    minor: 'Smaller Bicep',
    example: 'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/articles/image_article_collections/anatomy_pages/493x335_bicep.jpg?resize=646px:*&output-quality=100',
    notes: 'testing',
    modification: 'idk'
};

const newCard = (exercise) => {
    const card = document.createElement('div');
    card.setAttribute('class', 'card');

    const cardBody = document.createElement('div');
    cardBody.setAttribute('class', 'card-body');

    const img = document.createElement('img');
    img.setAttribute('src', exercise.example);
    img.setAttribute('class', 'exercise-example card-img-top');
    cardBody.append(img);

    const name = document.createElement('h4');
    name.innerText = exercise.name;
    name.setAttribute('class', 'card-text');
    cardBody.append(name);

    const titlehr = document.createElement('hr');
    titlehr.setAttribute('class', 'card-line');
    cardBody.append(titlehr);

    const equipment = document.createElement('p');
    equipment.innerText = exercise.equipment;
    equipment.setAttribute('class', 'card-text');
    cardBody.append(equipment);

    const type = document.createElement('p');
    type.innerText = exercise.type;
    type.setAttribute('class', 'card-text');
    cardBody.append(type);

    const musclehr = document.createElement('hr');
    musclehr.setAttribute('class', 'card-line');
    cardBody.append(musclehr);

    const major = document.createElement('p');
    major.innerText = exercise.major;
    major.setAttribute('class', 'card-text');
    cardBody.append(major);

    const minor = document.createElement('p');
    minor.innerText = exercise.minor;
    minor.setAttribute('class', 'card-text');
    cardBody.append(minor);

    const notes = document.createElement('p');
    notes.innerText = exercise.notes;
    notes.setAttribute('class', 'card-text');
    cardBody.append(notes);

    const modification = document.createElement('p');
    modification.innerText = exercise.modification;
    modification.setAttribute('class', 'card-text');
    cardBody.append(modification);

    card.append(cardBody);

    document.getElementById('container').append(card);

};

newCard(exercise);
