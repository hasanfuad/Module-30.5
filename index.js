// <<<<<<<<<<<<<<= Javascript we need for REACT =>>>>>>>>>>>>>

// var const let

const birthDate = "1996-02-26";

const person = {
    pName: "Fuad",
    age: 25,
    city: "Chittagong",
    isWorking: true
}

const friendList = ['someone', 'unknown', 'known']

const showMe = person.pName;
// console.log(showMe);

let price = 30;
    price = 100;

const productPrice = `This is ${price} Tk`;
const mySelf = `I am ${person.pName}. I'm ${person.age} years old`;
// console.log(mySelf);


// Condition 

// if(price > 25 && person.age > 20){
//     console.log("He's a teenager");
// }
// else{
//     console.log("Not matched"); 
// }

// Array 

const name = ['rahim', 23, 'karim']
const obj = [{id: 10, city: "chittagong", isPlaying: true}, {id: 20, city: "Dhaka"}]

// console.log(obj[0]);

// loop 

for(let i = 0; i <= name.length; i++){
    const element = name[i];
    // console.log(element);
}

// function 

function add (num1, num2){
    return num1 + num2;
}

// arrow 

const add1 = (num1, num2)=>{
    return num1 + num2;
}

const res = add1(15,10);
// console.log(res);

const doubleIt = number => number * 2;
console.log(doubleIt(4));

