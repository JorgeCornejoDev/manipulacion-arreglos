const users = [
    { userId: 1, username: "Tom", attributes: ["Nice","Cute"]},
    { userId: 2, username: "Mike", attributes: ["Lovely"]},
    { userId: 3, username: "Nico", attributes: ["Nice","Cool"]},
];

// Con Map y Falt por separado
const respuesta = users.map( user => user.attributes).flat();

// Con el método FatMap

const respuesta2 = users.flatMap( user => user.attributes);


console.log( "Co map y flat", respuesta );
console.log( "Con flatMap", respuesta2 );

// Reto de la clase
const calendars = {
    primaryCalendar: [
      {
        startDate: new Date(2021, 1, 1, 15),
        endDate: new Date(2021, 1, 1, 15, 30),
        title: "Cita 1",
      },
      {
        startDate: new Date(2021, 1, 1, 17),
        endDate: new Date(2021, 1, 1, 18),
        title: "Cita 2",
      },
    ],
    secondaryCalendar: [
      {
        startDate: new Date(2021, 1, 1, 12),
        endDate: new Date(2021, 1, 1, 12, 30),
        title: "Cita 2",
      },
      {
        startDate: new Date(2021, 1, 1, 9),
        endDate: new Date(2021, 1, 1, 10),
        title: "Cita 4",
      },
    ],
};

const respuesta3 = Object.values(calendars).flatMap( item => {
    return item.map( date => date.startDate);
});


console.log( respuesta3 );
