// Truthy and Falsy

/*  
    Everything in JS is true or false in boolean context
    This doesn't mean that their value itself is true or false,  
    but they are treted as true or false in boolean context.
*/

/*
FALSY values: 0, 0n(BigInt value), ""(Empty String), null, undefined, NaN

TRUTHY values: Everything Else
*/

if(0){
    console.log("It is True value")
} else{
    console.log("It is a Falsy value")
}

if(0n){
    console.log("It is True value")
} else{
    console.log("It is a Falsy value")
}

if(""){
    console.log("It is True value")
} else{
    console.log("It is a Falsy value")
}

if(null){
    console.log("It is True value")
} else{
    console.log("It is a Falsy value")
}

if(undefined){
    console.log("It is True value")
} else{
    console.log("It is a Falsy value")
}

if(NaN){
    console.log("It is True value")
} else{
    console.log("It is a Falsy value")
}

if(1){
    console.log("It is True value")
} else{
    console.log("It is a Falsy value")
}

if(23){
    console.log("It is True value")
} else{
    console.log("It is a Falsy value")
}

if(" "){
    console.log("It is True value")
} else{
    console.log("It is a Falsy value")
}

if("Kuldeep"){
    console.log("It is True value")
} else{
    console.log("It is a Falsy value")
}

