// ****************************** STRING METHODS ******************************

// Methods: That can be performed on objects. Methods ends with parenthesis (), 
// such as console.log(), alert(), console.warn() etc.

// Format: stringName.methode()


// *************************** TRIM METHOD ************************************

let msg = "       Hello           ";
let newMsg = msg.trim();
 
// .trim() method trims white spaces from both ends and return a new string.

// console.log(`${msg} friends.`)

// console.log(`${newMsg} friends.`);


// ************************ toLowerCase and toUppercase ***********************

let name = "AMERICA";
let message = "error";

console.log(name.toLowerCase());
console.log(message.toLocaleUpperCase());


// ****************************** String Length *********************************

// Note : str.length is NOT A METHOD because it does not ends with paranthesis(), 
// Instead it is a STRING PROPERTY.

console.log(name.length);
