'use strict';

function popup(message){

    let userName = prompt(message);

    console.log(userName);

    let looking = alert("Hello " + userName + "! We sell guitars here.");
    console.log("First response = " + looking);

    let response;
    while (response !== "yes") {
    response = prompt("Can I help you find a guitar?").toLowerCase();
    document.write("<p>You said " + response + "</p>");
    }

    document.write("<p>Something isn't working. </p>");
    document.write("<p id='username'>" + userName + "<p>");

    }

    popup("Hello, what is your name?");

