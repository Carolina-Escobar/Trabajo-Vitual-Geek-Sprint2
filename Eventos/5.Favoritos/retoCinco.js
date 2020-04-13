'use strict';
const teacherIsra = document.querySelector('.teacher--isra');
const teacherBarlos = document.querySelector('.teacher--tuerto');
const teacherNasi = document.querySelector('.teacher--nasi');

function teachers(event) {
    const teacher = event.currentTarget;
    if (teacher.classList.contains('teacher--selected')) {
        teacher.classList.remove('teacher--selected');
        teacher.querySelector('.favorite').innerHTML = 'Añadir';
    } else {
        teacher.classList.add('teacher--selected');
        teacher.querySelector('.favorite').innerHTML = 'Quitar';
    }

}

isra.addEventListener('click', teachers);
barlos.addEventListener('click', teachers);
nasi.addEventListener('click', teachers);