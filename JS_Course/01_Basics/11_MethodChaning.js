// ************************ WITHOUT METHOD CHANING ****************************

let msg = "    hello     "
// let newMsg = msg.trim();
// console.log(`Before trim: ${msg}`);
// console.log(`After trim: ${newMsg}`);

// newMsg = newMsg.toUpperCase();
// console.log(`After Uppercase: ${newMsg}`);

// **************************** WITH METHOD CHANING ***************************

let newMsg = msg.trim().toUpperCase();
console.log(newMsg);
