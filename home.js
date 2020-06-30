// let productName = "hiking boots",
//     name = price,
//     discounted = true;

// showMessage('Welcome');

//types and operators{ symbols that add functionalitions to our code}
// numbers and operators
// let price = 67;
// price = price + 2;
// price = price * 3;
// price += 5; //increment
// price -= 4; // decremeent oper


// showMessage(++price); // it really maters where you put your increment and decrement operators

//numbers and precion
// price = 1.1 + 1.3; // 2.400000004

// //string and text

// let fname = 'Julia';
// let lname = 'John';
// let age = 34;
// let adress = 'Nairobi';
// // let message = fname.length;
// //concatenation
// let message = `hey I'm ${fname} ${lname} im ${age} yrs old. I come from ${adress}`;

// //convering strings
// let amount = 123;
// let age = Number.parseFloat('56as');
// amount = amount.toString();
// showMessage(age);

// let saved = true;
// // saved = !saved;
// showMessage(saved);


//objects and symbols
let person = {
    fname: 'john',
    lname: 'Doe',
    age: 45
};
// showMessage(person.age);;
// showMessage(person.fname);

//symbols

// condition if statement if 
let price = 20;
if (price !== 40) {
    // showMessage('discounted');
}

// //truth/ falsy;
// if (1.1 + 1.3 !== 2.4) {
//     // showMessage('true');
// }


// // we can fix this  by rounding of our values
if (+(1.1 + 1.3).toFixed(2) === 2.4) {
    // showMessage("True");
}

//if else stetemnet
if (true) {
    // showMessage('true');
} else {
    // showMessage('false');
}

let pric = 5;
if (pric >= 5) {
    // showMessage(true);
} else {
    // showMessage(false);
}

//ternary operator
let pricee = 20;

if (price > 30) {
    // showMessage("Yes");
} else {
    // showMessage('no');
}

// es6
// let pri = 0;
// pri < 20 ? showMessage('yes') : showMessage('no');

//block scope using let

//looping with for ()

for (let i = 0; i <= 5; i++) {
    // showMessage(i);
}

//while() loop
let j = 4;
while (j > 0) {
    // console.log(j);
    j--;
}

// do whle loop
let k = -4;
do {
    // console.log(k);
    k--;
} while (k > 0);


//functions
// function basics( block code code that solves a task)
function logMessage(True) {
    // console.log("Ilove you brother");
}
logMessage();

// function expresion
let fn = function logMessage() {
    // console.log("Ilove you brother");
};
fn();

//passing  information to a function()
//we can pass multiple infomation to our function through, separate it using a comma (,)
let lfn = function (message, fname) {
    // console.log(message);
    // console.log(fname);
}
lfn('hello', 'john');

// getting infomation from the function
let fun = function myFunction(value) {
    let code = (value * 3);
    return code; // if a function does not have a return statement it implicityly returns undefined

};
let secreCode = fun(477);
// showMessage(secreCode);


// function scope 
let key = 24;

function getSecretCode() {
    //     let keyGenerator= function (){

    //     let key = 12;
    //     console.log('in keyGeneator:', key);
    //     return key;
    // }
    let code = value * keyGenerator();
}