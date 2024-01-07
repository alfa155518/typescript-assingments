"use strict";
//********** Assignment 1 *************//
// Create Your Class Here
class Player {
    constructor(id, title, level) {
        this.id = id;
        this.title = title;
        this.level = level;
        this.logIn = function () {
            console.log('Logged In');
        };
        this.logOut = (msg) => {
            console.log(msg);
        };
    }
}
let player1 = new Player(100, "Elzero", 95);
console.log(player1.id); // 100
console.log(player1.title); // "Elzero"
console.log(player1.level); // 95
player1.logIn(); // Logged In
player1.logOut("Good Bye"); // Logged Out, Good Bye
