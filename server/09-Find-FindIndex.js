
const numbers = [1,30,49,29,10,13];

// Con iteración For
let rta = undefined;
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if( element === 300) {
        rta = element;
        break;
    }
    
}

console.log( 'Con For ', rta);

// Con el Método Find
const find = numbers.find( item => item === 30 );
console.log('Con Find ', find );


const products = [
    {
      name: "Pizza",
      price: 12,
      id: '1'
    },
    {
      name: "Burger",
      price: 23,
      id: '2'
    },
    {
      name: "Hot dog",
      price: 34,
      id: '3'
    },
    {
      name: "Hot cakes",
      price: 355,
      id: '4'
    },
  ];

  const respuesta = products.find( item => item.id === '3');
  const findIndex = products.findIndex( item => item.id === '1');

  console.log( respuesta );
  console.log( findIndex );

  