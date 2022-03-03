// VARIABLES
const question1 = document.querySelector('.q1');
const question2 = document.querySelector('.q2');
const question3 = document.querySelector('.q3');
const question4 = document.querySelector('.q4');
const question5 = document.querySelector('.q5');

const pregunta = document.querySelector('.p1');
const respuesta = document.querySelector('.answer');

let mostrado = false;
const arrow = document.querySelector('.arrow');

question1.addEventListener('click', mostrarRespuesta);
question2.addEventListener('click', mostrarRespuesta);
question3.addEventListener('click', mostrarRespuesta);
question4.addEventListener('click', mostrarRespuesta);
question5.addEventListener('click', mostrarRespuesta);

function mostrarRespuesta() {
    mostrado = !mostrado;
    if ( mostrado ) {
        arrow.classList.add('rotate');
        pregunta.classList.add('negrita');
        respuesta.classList.add('oculto');
    } else {
        arrow.classList.remove('rotate');
        pregunta.classList.remove('negrita');
        respuesta.classList.remove('oculto');
    }
}
