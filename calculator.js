const prompt = require("prompt-sync")(); // Please don't touch me :
//Decalre the varibles 

let numberOne; 
let numberTwo;
let operation;

// will check the first number 
function checkNumberOne() {
    numberOne = prompt("Please enter the first number: ");
    if (isNaN(numberOne)) {
        console.log("invalid number");
        checkNumberOne();
    } else {
        checkNumberTwo();
    }
}

//check the second number
function checkNumberTwo() {
    numberTwo = prompt("Please enter the second number: ");
    if (isNaN(numberTwo)) {
        console.log("invalid number");
        checkNumberTwo();
    } else {
        result();
    }
}

//result for the numbers and check the operation
function result() {
    operation = prompt("Please choose the operation (+, -, /, *): ");
    if (operation === "+"){
        console.log(`${numberOne} ${operation} ${numberTwo} = ${parseInt(numberOne) + parseInt(numberTwo)}`)
        }else if (operation === "-"){
            console.log(`${numberOne} ${operation} ${numberTwo} = ${numberOne - numberTwo}`)
        }else if (operation === "/"){
            console.log(`${numberOne} ${operation} ${numberTwo} = ${numberOne / numberTwo}`)
        }else if(operation === "*"){
            console.log(`${numberOne} ${operation} ${numberTwo} = ${numberOne * numberTwo}`)
        }else {
            console.log("Please choose one if the opreator");
            result();
        }
}

//run the function
checkNumberOne()  
/* 
const numberOne = 5;
const numberTwo = 7;
const operation = "*";

//check the opreation
if (operation === "+"){
console.log(`${numberOne} ${operation} ${numberTwo} = ${numberOne + numberTwo}`)
}else if (operation === "-"){
    console.log(`${numberOne} ${operation} ${numberTwo} = ${numberOne - numberTwo}`)
}else if (operation === "/"){
    console.log(`${numberOne} ${operation} ${numberTwo} = ${numberOne / numberTwo}`)
}else {
    console.log(`${numberOne} ${operation} ${numberTwo} = ${numberOne * numberTwo}`)
}
*/