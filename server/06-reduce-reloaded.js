
const items = [1,3,2,3,3,3,1,2];

const histograma = items.reduce((obj,item) => {
    if (!obj[item]) {
        obj[item] = 1;
    }else {
        obj[item] = obj[item] + 1;
    }
    return obj;
},{});

console.log( histograma );


const data = [
    {
        name: "Zulema",
        level: "high"
    },
    {
        name: "Santiago",
        level: "low"
    },
    {
        name: "Valentina",
        level: "low"
    },
    {
        name: "Lucía",
        level: "high"
    },
    {
        name: "Nicolas",
        level: "low"
    },
    {
        name: "Andrea",
        level: "medium"
    }
];


const level = data
    .map(item => item.level)
    .reduce((obj,item) => {
        if (!obj[item]) {
            obj[item] = 1;
        }else {
            obj[item] = obj[item] + 1;
        }
        return obj;
    },{});

console.log( level );