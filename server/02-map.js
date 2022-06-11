const letters = ['a','b','c'];

// Generando un nuevo array de forma lenta
const newArray = [];
for (let index = 0; index < letters.length; index++) {
    const element = letters[index];
    newArray.push( element + '++');
}
const newArrayMap = letters.map( item => item + '++')

const array = [1,2,3,4,5];

function solution(array) {
    const calculo = array.map(item => item * 2);
    console.log( calculo );
}

solution(array);

console.log( newArrayMap );
console.log( newArray );