const respuestas = document.querySelectorAll('.answer');
const preguntas = document.querySelectorAll('.ask');
const arrows = document.querySelectorAll('.arrow');

let most = [false, false, false, false, false];

for (let i = 0; i < preguntas.length; i++) {
    preguntas[i].addEventListener('click', function() {
        mostrarRespuesta(i);
    });
}

function cerrarPreguntas( id, id2 ) {
    let pos = id - 1;
    let cont = 0;
    most[pos] = true;
    console.log('Clickeando otra pregunta');
    respuestas.forEach( preg => {
        if ( preg.id != id) {
            preg.style.height = "0";
            preg.style.opacity = "0";
            most[preg.id - 1] = false;
        }
        console.log(preg.id - 1 + ': ' + most[preg.id - 1]);
    });
    preguntas.forEach( resp => {
        if ( resp.id != id2) {
            resp.classList.remove('negrita');
            arrows[cont].classList.remove('rotate');
        }
        cont = cont + 1;
    });
    console.log('----------------');
}
function mostrarRespuesta(id) {
    most[id] = !most[id];

    if ( most[id] ) {
        arrows[id].classList.add('rotate');
        preguntas[id].classList.add('negrita');
        respuestas[id].style.height = "50px";
        respuestas[id].style.opacity = "1";
        respuestas[id].style.transition = "all .3s ease";
        cerrarPreguntas(id + 1, id + 6);
    } else {
        console.log('Clickeando la misma pregunta');
        arrows[id].classList.remove('rotate');
        preguntas[id].classList.remove('negrita');
        respuestas[id].style.height = "0";
        respuestas[id].style.opacity = "0";
    }


}
