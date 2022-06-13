
const numbers = [1,30,49,29,10,13];

let rta = true;
for (let index = 0; index < numbers.length; index++){
    const element = numbers[index];
    if (element >= 40){
        rta = false
    }
};

console.log('Con for', rta);

const every = numbers.every( item => item <= 40);
console.log('Con every', every);


// Evaluar que todos los miembros del equipo deben saber menores de 15 años

const team = [
    {
      name: "Nicolas",
      age: 12,
    },
    {
      name: "Andrea",
      age: 8,
    },
    {
      name: "Zulema",
      age: 2,
    },
    {
      name: "Santiago",
      age: 13,
    },
  ];

  const evaluar = team.every( item => item.age < 15 );
  console.log('Son todos menores: ', evaluar );

//   Reto platzi 
/* 
  En este desafío tienes un array de números y deber retornar true si dentro de los números de ese array todos los números son pares

  la solución debería tener un input y output como los siguientes

  solution([2,4,6,8,10])
  solution([1,3,5,7,10,11])
  solution([1,3,5])


*/

function solution(numbers){
    return numbers.every( item => item % 2 === 0);
}

console.log(solution([2,4,6,8,10]));
console.log(solution([1,3,5,7,10,11]));
console.log(solution([1,3,5]));


