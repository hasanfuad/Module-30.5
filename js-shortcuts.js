
// Ternary Operator 

const money = 540;
const age = 10;
const color = 'white';
// const status = 'rich';
const cssClass = true;

    // let food; 
    // if(money > 50){
    //     console.log('Biriany');
    // }
    // else{
    //     console.log('Fuchka');
    // }

    // const food = (money > 50) && (age > 10) || (color === 'black') ? 'Biriany':  'Fuchka';

    // if(cssClass === true){
    //     return true;
    // }
    // else{
    //     return false;
    // }

    // const status = cssClass === true ? 'Active' : 'Inactive';

    // function call 

    // const show = active === true ? displayUser() : hideUser();

    // console.log(status);

    
    // if there's only one condition
    
    const active = true;
    
    const x = active && displayUser();
    const y = active || hideUser();
    
    console.log(x);
    console.log(y);
    
    
    function displayUser(){
       return("My body color:", color);
    }

    function hideUser(){
        return("No data!");
    }


    const stringToNum = +'45';
    console.log(typeof(stringToNum));

    const numToString = 50 + '';
    console.log(typeof(numToString));


    function add(num1, num2=5){
        return num1 + num2;
    }

    console.log(add(10, 15));