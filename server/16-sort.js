const months = ['March', 'Jan', 'Feb', 'Dec'];
const numbers = [1, 30, 4, 21, 100000];
const words = ['réservé', 'premier', 'communiqué', 'café', 'adieu', 'éclair', 'banana'];
const orders = [
    {
        customerName: "Nicolas",
        total: 600,
        delivered: true,
        date: new Date(2022, 1, 1, 8)
    },
    {
      customerName: "Zulema",
      total: 120,
      delivered: false,
      date: new Date(2022, 2, 1, 11)
    },
    {
      customerName: "Santiago",
      total: 1840,
      delivered: true,
      date: new Date(2022, 3, 1, 3)
    },
    {
      customerName: "Valentina",
      total: 240,
      delivered: true,
      date: new Date(2022, 4, 1, 10)
    },
  ];

months.sort();
console.log(months);

numbers.sort((a,b) => a - b);
console.log(numbers);

words.sort((a,b) => a.localeCompare(b));
console.log(words);

orders.sort((a,b) => a.total - b.total);
console.log( orders );

const newOrders = orders.sort((a,b) => a.date - b.date);
console.log( "New Orders",newOrders );