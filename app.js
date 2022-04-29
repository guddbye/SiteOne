'use strict';

var username = prompt("What is your name?");

console.log(username);

if (username === "Brentice") {
    console.log("Hello Brentice.");
} else {
    console.log("Welcome " + username + "!");
}

document.write(username);

let response = prompt("What is the best color?");

response.toLowerCase();

if (response === "yellow") {
    document.write("You are correct!");
} else if (response == "black") {
    document.write("You are also correct!");
} else {
    document.write("Yeah, that's not it.");
}