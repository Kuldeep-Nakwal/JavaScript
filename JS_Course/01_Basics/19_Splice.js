// ***************************** SPLICE *****************************************

// Removes, replace and add elements in place.

// Syntax: splice(start, deleteCount, item0, item1...., itemN)

let cars = ["audi", "bmw", "xuv", "maruti"];

console.log(cars.splice(3));
console.log(cars);


console.log(cars.splice(0,1));
console.log(cars);

cars.push("maruti");
cars.push("hyundai");

console.log(cars);

cars.splice(1, 0, "ferrari", "suzuki");
console.log(cars);
