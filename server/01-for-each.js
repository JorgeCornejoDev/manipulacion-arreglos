const letters = ['a','b','c'];

// Creamos un for tradicional
for (let index = 0; index < letters.length; index++) {
    const element = letters[index];
    console.log( 'con for', element );
};

// Con métodos nativos de arrays
letters.forEach( element =>  console.log( 'con forEach', element ));