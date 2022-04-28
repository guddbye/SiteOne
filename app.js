'use strict';


function greetings (name) {

    let username = promt('What is your name?');
    console.log('Hello, ' + username);

    let time = primt('What time is it?');
    let message;

    if(time <= 11) {
        message = 'Good morning!';
        } else if (time < 18) {
            message = 'Good afternoon!';
        } else if(time <= 24) {
            message = 'Good evening!';
                    } else {
                        message = "Maybe you don't know the time...";
                    }

                    document.write('Hello ' + username + '!' + message):
    return username;
}


// calls the function with its own name.
// gettings (username)


greetings()
