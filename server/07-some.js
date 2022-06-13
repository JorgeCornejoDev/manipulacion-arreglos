const numbers = [1,2,3,4];

// Forma larga con FOR 

let rta = false;
for ( let i = 0; i < numbers.length; i++ ) {
    const element = numbers[i];
    if ( element % 2 === 0 ) {
        rta = true;
        break;
    }
};


// Forma corta con método some
const existe = numbers.some( item => item % 2 === 0);


console.log( existe );
console.log( rta );


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

const delivered = orders.some( item => item.delivered );
console.log( delivered );



const dates = [
    {
      startDate: new Date(2021, 1, 1, 10),
      endDate: new Date(2021, 1, 1, 11),
      title: "Cita de trabajo",
    },
    {
      startDate: new Date(2021, 1, 1, 15),
      endDate: new Date(2021, 1, 1, 15, 30),
      title: "Cita con mi jefe",
    },
    {
      startDate: new Date(2021, 1, 1, 20),
      endDate: new Date(2021, 1, 1, 21),
      title: "Cena",
    },
  ];

  const newAppointment = {
    startDate: new Date(2021, 1, 1, 20),
    endDate: new Date(2021, 1, 1, 21, 30),
  };

  const areIntervalsOverlapping = require('date-fns/areIntervalsOverlapping')

const isOverlap = newDate => {
    return dates.some( date => {
        return areIntervalsOverlapping(
            { start: date.startDate, end: date.endDate },
            { start: newDate.startDate, end: newDate.endDate }
        )
    })
}

console.log( 'isOverlap', isOverlap(newAppointment));



// Reto Platzi 

/*
    En este desafío tienes un array de números y debes retornar true si dentro de los números de ese array al menos uno es un número par

    solution([1,3,5,7,10,11])
    solution([1,3,5])


*/

// Resultado 
function solution( numbers ){
    return numbers.some( item => item % 2 === 0)
}

console.log( solution([1,3,5,7,10,11]));
console.log( solution([1,3,5]));


