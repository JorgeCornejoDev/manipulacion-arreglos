
const elements = ["fire","Air","Water"];

// Solución con For
const separator = '--';
let rtaFinal = '';
for (let index = 0; index < elements.length; index++) {
    const element = elements[index];
    rtaFinal = rtaFinal + element + separator;
};

console.log( 'con For', rtaFinal );

// Con método join
const rta = elements.join('--');
console.log('Con join', rta);

const texto = 'Curso de manipulación de arrays';
const textoFinal = texto.split(' ').join('-').toLowerCase();

console.log( textoFinal );


// Reto platzi
/*

    En este desafío vas a recibir el titulo de un artículo y tu debes transformarlo en un formato URL en donde normalmente se tranforma todo en minúsculas y se cambian los espacion por un guion (-), por ejemplo: Curso de arrays => curso-de-arrays

    solution("La forma de correr Python");
    solution("La API para nunca parar de aprender");
    solution("Curso de arrays");



*/

function solution(title) {
    return title.split(' ').join('-').toLowerCase();
}

console.log( solution("La forma de correr Python"));
console.log( solution("La API para nunca parar de aprender"));
console.log( solution("Curso de arrays"));
