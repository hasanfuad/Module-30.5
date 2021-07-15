
// Array destructuring

function sum(num1){
    return [num1, num1*2]
}

const [firstNum, secondNum] = sum(5);

// console.log(firstNum, secondNum);




// obj destructuring 
const products = [
    {id: 20, product: 'Laptop', price: 50000},
    {id: 30, product: 'Mobile', price: 5000},
    {id: 40, product: 'Tab', price: 500},
    {id: 60, product: 'Tv', price: 5000},
    {id: 80, product: 'Monitor', price: 400}
]

const {id, product, price} = products[0];

// console.log('ID:', id, 'Product:', product);

// Three dots 

const currentArray = ['wasif','moniyem', 'tariq', 'hasib'];
const newArr = [...currentArray, 'myself']
const anotherArray = [...newArr, ...currentArray]
console.log(anotherArray);

