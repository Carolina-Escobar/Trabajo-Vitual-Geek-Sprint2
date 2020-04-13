'use strict';

const button = document.querySelector('.hello');
const text = document.querySelector('.text');

const hello = () => {
    text.innerHTML = "Mi primer click, ¡ole yo y la mujer que me parió!"
}

button.addEventListener ('click', hello);