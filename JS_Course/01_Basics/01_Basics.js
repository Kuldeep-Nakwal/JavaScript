const accountId = 278349;
let accountEmail = "kuldeep@google.com";
var accountPassword = "1237648";
accountCity = "Kota";
let accountState;

// accountId = 23;  // Not Allowed

accountEmail = "kn@kn.com";
accountPassword = "4903084";
accountCity = "Mumbai";

console.log(accountId);

/*
Prefer not to use var because of issue in block scope and functional scope.
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);



