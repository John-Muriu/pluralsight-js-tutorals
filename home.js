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
    showMessage("True");
}