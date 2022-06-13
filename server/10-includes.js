const pets = ['cat','dog','bat'];

// Con For
let includeInArray = false;
for (let index = 0; index < pets.length; index++) {
    const element = pets[index];
    if( element === 'dog'){
        includeInArray = true;
        break;
    }
}

console.log( 'Con For ',includeInArray );

const respuesta = pets.includes('cat');
console.log('Con Include', respuesta);

// Reto platzi 
/*
    El desafío es crear un buscador usando funciones como filter e includes, vas a tener un array con palabras y tienes que retornar un array con sola las que cumplan con la condición de tener el parámetro de búsqueda.

    La solución debería tener un input y output como los siguientes: 

    solution(["ana", "santi", "nico", "anastasia"], "an");
    solution(["ana", "santi", "nico", "anastasia"], "xyz");

*/

const search = (words, query) => {
    return words.filter( item => {
        return item.includes( query );
    })
};

console.log( search(["ana", "santi", "nico", "anastasia"],"an"));
console.log(search(["ana", "santi", "nico", "anastasia"],"xyz"));