const words = ['spay','limit','elite','exuberant'];


// Forma larga de filtrar elementos de un array
const newArray = [];
for ( i = 0; i < words.length; i++ ) {
    const item = words[i];
    if (item.length >= 6 ) {
        newArray.push( item )
    }
};


// Forma rápida con el método filter
const filter = words.filter( item => item.length >= 6 );

console.log( 'Original', words );
console.log( 'Forma larga', newArray );
console.log( 'Con filter', filter );


const orders = [
    { 
        customerName: 'Nicolas ',
        total: 60,
        delivered: true
    },
    {
        customerName: 'Zulema',
        total: 120,
        delivered: false
    },
    {
        customerName: 'Santiago',
        total: 180,
        delivered: true
    },
    {
        customerName: 'Valentina',
        total: 240,
        delivered: true
    },
    {
        customerName: 'Nicolas',
        total: 140,
        delivered: false
    }
];

const delivered = orders.filter( item => item.delivered && item.total >= 100 );
console.log('delivered -', delivered );

const search = query => {
    return orders.filter( item => {
        return item.customerName.includes( query );
    })
};

console.log( 'buscador -', search('Va'));


// Reto platzi 

/* 
    Tienes un array con palabras, el desafío es retornar un array solo con las que cumplan con la condición de tener 4 letras o más letras.

    solution(['amor','sol','piedra','día']);

    -Output-
    ['amor','piedra']

*/

const arrayReto = ['amor','sol','piedra','dìa'];

function solution( array ) {
    return array.filter( item => item.length >= 4 );
};

console.log( solution( arrayReto ) );