// fetch('url')
// .then(res => res.json)
// .then(data => console.log(data))
// const person = {
//     name: "Fuad",
//     age: 25
// }

// const testing = document.getElementById('testing')

// const testingInfo = `<h1>hello world </h1>`
// testing.innerHTML = testingInfo;

// const jsonStringify = JSON.stringify(person);
// const parsedJson = JSON.parse(jsonStringify)

// console.log(parsedJson.name);


// Local Storage

// const userId = localStorage.setItem("UserId", 1234)
// console.log(userId);

// const user = localStorage.getItem('UserId');
// console.log(user);

// const user = localStorage.setItem('person', JSON.stringify(person));
// const getUser = localStorage.getItem('person');
// const getUserParsed = JSON.parse(getUser);


// Object keys

// const keys = Object.keys(getUserParsed);
// console.log(getUserParsed.age);
// console.log(keys);

// Object Values 

// const value = Object.values(getUserParsed);
// console.log(value);




const person = {
    id: 202,
    name: "Fuad",
    age: 25
}
const stringifyObj = JSON.stringify(person);
const stringParsed = JSON.parse(stringifyObj)
        // console.log(stringParsed.id);

        

// const localStorageSet = localStorage.setItem('userId', person.id);
// const localStorageGet = localStorage.getItem('userId');

const localStorageSet = localStorage.setItem('userName', JSON.stringify(person));

const localStorageGet = localStorage.getItem('userName');
const localStorageParsed = JSON.parse(localStorageGet);
        console.log(localStorageParsed);


console.log(person.id);

const keys = Object.keys(person);
console.log(keys);

const value = Object.values(person);
console.log(value);