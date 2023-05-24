const title = document.querySelector('.header__title');

const greetings = [
    'Hello!',
    'Welcome!',
    'Hola!',
    'Nice to see you!',
    'Привіт!'
];

const colors = [
    'red',
    'yellow',
    'blue',
    'green'
]

const getRandom = (arr) => {
    const randIndx = Math.floor(Math.random() * arr.length);
    return arr[randIndx];
}

title.innerText = getRandom(greetings);

title.style.color = getRandom(colors);

// title.classList.add('some-class');
