// ******************************** else if Statement *********************************

// Traffic light system

let color = "red";

if (color === "red") {
    console.log("Stop");
    
} 
else if (color === "yellow") {
    console.log("Slow down");
    
}
else if (color === "red") {
    console.log("Stop");
}

// Voter (True/False)

let age = 25;

if (age >= 18) {
    console.log("You can vote.");
    
} else if (age < 18) {
    console.log("You can not vote.");
    
}

// Traffic light system

let colour = "white";

if (colour === "red") {
    console.log("Stop");
    
} 
else if (colour === "yellow") {
    console.log("Slow down");
    
}
else if (colour === "red") {
    console.log("Stop");
}
else {
    console.log("Traffic Light is broken.");
    
}

// Popcorn price

let size = "XL";

if (size === "XL") {
    console.log("Price = 250");
    
} 
else if (size === "L") {
     console.log("Price = 200");
}
else if (size === "M") {
     console.log("Price = 150");
}
else if (size === "S") {
     console.log("Price = 100");
}


// *********************************** Nested if else **********************************

let marks = 79;

if (marks >= 33) {
    console.log("PASS");
    if (marks > 80) {
        console.log("Grade : O");  
    } 
    else if (marks >= 60) {
        console.log("Grade : A"); 
    }
    else if (marks >= 48 && marks < 60){
        console.log("Grade : B"); 
    }
    else if(marks > 33 && marks < 48){
        console.log("Grade : C");
    }
} 
else {
    console.log("Better Luck next time!");
    
}
