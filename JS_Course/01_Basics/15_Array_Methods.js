// ***************************** Array Methods ***************************************

// ****************************** PUSH and POP ***************************************

let cars = ["Maruti", "Hyundai", "Honda"];

// cars.push("Toyota");

// console.log(cars);

// console.log(cars.length);

// console.log(cars.push("BMW"));

// console.log(cars);

// cars.pop();

// console.log(cars);

// ************************************ SHIFT UNSHIFT ***************************************

let fruits = ["mango", "apple", "guauva"];

fruits.unshift("grapes");
console.log(fruits);

let removed = fruits.shift();
console.log(fruits);
console.log(removed);


// ********************************** Exercise **********************************

let months = ["january", "july", "march", "august"];

// final array should be like this: ["july", "june", "march", "august"];

months.shift();
months.shift();
months.unshift("june");
months.unshift("july");

console.log(months);








