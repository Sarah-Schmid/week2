/*

//Custom Greeting//
console.log ('hello');

var name = window.prompt('what is your name?');

window.alert(`welcome, ${name}`)

//Username Password//
let username = prompt('Username:');
let password = prompt ('Password');

if (username == 'sammy123' && password == '12345') {
    alert('welcome back, ' + username);
} else {
    alert('Incorrect username or password.')
}

*/


//Username Password Loop//
var loggedIn = false;

while (!loggedIn){
    let username = prompt('Username:');
    let password = prompt ('Password');

    if (username == 'sammy123' && password == '12345') {
        alert('welcome back, ' + username);
        loggedIn = true;
    } else {
        alert('Incorrect username or password.');
    }
}