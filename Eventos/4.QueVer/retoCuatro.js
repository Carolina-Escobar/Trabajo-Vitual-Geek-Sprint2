'use strict';

const start = document.querySelector('.start');
const movies = document.querySelector('.movies');
const inception = 'Inception';
const theButterFlyEffect = 'The butterfly effect';
const eternalSunshineOfTheSM = 'Eternal sunshine of the spotless mind';
const blueVelvet = 'Blue velvet';
const split = 'Split';

const moviesList = () => {
    movies.innerHTML = 
    ` <li class="movie1"> ${inception} </li>
      <li class="movie2">${theButterFlyEffect}</li>
      <li class="movie3">${eternalSunshineOfTheSM}</li>
      <li class="movie4" >${blueVelvet}</li>
      <li class="movie5" >${split}</li>`
    ;

    const movie1=document.querySelector('.movie1');
    const movie2=document.querySelector('.movie2');
    const movie3=document.querySelector('.movie3');
    const movie4=document.querySelector('.movie4');
    const movie5=document.querySelector('.movie5');

    movie1.addEventListener('click', movieOne);
    movie2.addEventListener('click', movieTwo);
    movie3.addEventListener('click', movieThree);
    movie4.addEventListener('click', movieFour);
    movie5.addEventListener('click', movieFive);
    
}

start.addEventListener('click', moviesList); 

const movieOne = () => {
    console.log(`El nombre de la película es ${inception}`); 
}
const movieTwo = () => {
    console.log(`El nombre de la película es ${theButterFlyEffect}`); 
}
const movieThree = () => {
    console.log(`El nombre de la película es ${eternalSunshineOfTheSM}`); 
}
const movieFour = () => {
    console.log(`El nombre de la película es ${blueVelvet}`); 
}
const movieFive = () => {
    console.log(`El nombre de la película es ${split}`); 
}
