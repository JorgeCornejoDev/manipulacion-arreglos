
const elements = [1,1,2,2];
const othersElements = [3,3,4,4];


// Con For
const newArray = [...elements];
for (let index = 0; index < othersElements.length; index++) {
    const element = othersElements[index];
    newArray.push(element);
};

console.log('Con for', newArray );

// Con método concat
const respuesta = elements.concat(othersElements);
console.log( 'Con concat', respuesta );





