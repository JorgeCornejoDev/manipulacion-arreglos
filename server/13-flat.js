const matriz = [[1,2,3],[4,5,6],[7,8,9]];

// Con for
const newArray = [];
for (let i = 0; i < matriz.length; i++) {
    const array = matriz[i];
    for(let j = 0; j < array.length; j++){
        const element = matriz[i][j];
        newArray.push(element);
    }
};

// Con el método Flat
const respuesta = matriz.flat();

console.log("Con For", newArray );
console.log("Con Flat", respuesta );

