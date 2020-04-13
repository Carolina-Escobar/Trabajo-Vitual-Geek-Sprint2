'use strict';

const start = document.querySelector('.start');
const inception = 'Inception';
const theButterFlyEffect = 'The butterfly effect';
const eternalSunshineOfTheSM = 'Eternal sunshine of the spotless mind';
const blueVelvet = 'Blue velvet';
const split = 'Split';

const moviesList = document.getElementById('start');
start.addEventListener('click', () => document.querySelector('ul').innerHTML = '<li class="movieOne" onclick="movieOne()">Inception</li><li onclick="movieTwo()">The butterfly effect</li><li onclick="movieThree()">Eternal sunshine of the spotless mind</li><li onclick="movieFour()">Blue velvet</li><li onclick="movieFive()">Split</li>'
);


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


/*start.addEventListener('click',()=>{    
    document.querySelector('.movies').innerHTML=
    `
    <li class="movie1"> ${inception} </li>
    <li class="movie2">${theButterFlyEffect}</li>
    <li class="movie3">${eternalSunshineOfTheSM}</li>
    <li class="movie4" >${blueVelvet}</li>
    <li class="movie5" >${split}</li>
    `;

    const moviesList=document.querySelector('.movies');
    const movies=event.target;
    moviesList.addEventListener('click',()=>{
        console.log(event.target);
    });
});*/