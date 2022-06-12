// Reduce, entrega el mismo array pero con un solo valor

const totales = [1,2,3,4];

// Método extenso con for

let sum = 0; // contador
for (let i = 0; i < totales.length; i++) {
    const element = totales[i];
    sum = sum + element;
};

console.log( 'Forma larga -> ', sum );

// Método reduce
const result = totales.reduce( (sum, element ) => sum + element, 0);
console.log( 'Método reduce -> ', result );


// Reto platzi
/*
    Tienes un array de números y debes retornar la suma de todos los valores en él.

    Se tienen los siguientes arreglos:
    arreglo1 = [1,1,1]
    arreglo2 = [2,4,8]

*/

// Solución
function solucion(array){
    return array.reduce( ( sum,item ) => sum + item, 0);
}

console.log( solucion([1,1,1]));
console.log( solucion([2,4,8]));



