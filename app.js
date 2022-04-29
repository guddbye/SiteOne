'use strict';

function popup(message){

    let userName = prompt(message);

    console.log(userName);

    let place = alert("Hello " + userName + "! We sell guitars here.");
    console.log("First response = " + place);

    let answer;
    while (answer !== "5") {
    answer = prompt("Can I help you find a guitar?").toLowerCase();
    console.log("User said: ", answer);
    }

    console.log("We're out of the loop!")
    
    document.querySelector(".username").innerHTML = "<p id='username'>" + userName + "<p>";
    }

    popup("Hello, what is your name?")

