'use strict';
const button = document.querySelector('.button');
const input = document.querySelector('.name');

const greeting = () => console.log('Hola ' + input.value);

button.addEventListener('click', greeting);


