'use strict';

var yourname = prompt("What is your name?");

console.log(yourname);

if (yourname === "Brentice") {
    console.log("Hello Brentice.");
} else {
    console.log("Welcome " + yourname + "! Welcome to Gunther's shop!");
}

document.write(yourname);
let response = prompt("What are you looking for?");
response.toLowerCase();

if (response === "guitar") {
    document.write("We can get you that!");
} else if (response == "acoustic guitar") {
    document.write("We have that as well!");
} else {
    document.write("We don't sell that.");
}