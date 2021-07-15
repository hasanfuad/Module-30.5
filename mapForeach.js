const numbers = [2, 4, 8, 9];
const friends = ['wasif','moniyem', 'tariq', 'hasib'];
const products = [
    {id: 20, product: 'Laptop', price: 50000},
    {id: 30, product: 'Mobile', price: 5000},
    {id: 40, product: 'Tab', price: 500},
    {id: 60, product: 'Tv', price: 5000},
    {id: 80, product: 'Monitor', price: 400}
]

// products.map(data => console.log(data.product));
// friends.forEach(element => console.log(element))
const res = numbers.filter(value => value > 2 )
// console.log(res);

const res2 = products.filter(pd => pd.price < 1000);

// console.log(res2);

const res3 = products.filter(product => product.id != 30);
// console.log(res3);

const hasLaptop = products.find(pd => pd.product === 'Laptop')
console.log(hasLaptop);