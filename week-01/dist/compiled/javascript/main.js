"use strict";
//Assignment 2
// function calculate(numOne:number, numTwo:number){
//     return numOne + numTwo;
//   }
//   console.log(calculate(10, 20)); // 30
//   console.log(calculate("10", "20")); // We Don't Need This To Work
//   console.log(calculate(+true, +true)); // 2
// Assignment 3
// function printInfo(valueOne:(string | number), valueTwo: (string|number)){
//     return `Value One Is ${valueOne}, Value Two Is ${valueTwo}`;
// }
//   console.log(printInfo(10, 20)); // Value One Is 10, Value Two Is 20
//   console.log(printInfo("10", "20")); // Value One Is "10", Value Two Is "20"
//   console.log(printInfo(true, [1, 2, 3])); // We Don't Need This To Work
// Assignment 4
// let arr: (number | boolean[] | (string | (string | number)[])[])[];
// console.log(arr = [1,[true],['st',['str',1]]])
// Assignment 5
// function reportErrors(username, age: number) {
//     let rank = "Professor";
//     return `Username: ${username}`;
//     console.log("We Will Not Reach Here");
//   }
//   console.log(reportErrors("Elzero", 40));
// Assignment 6
// let nothing;
// let theName= "Elzero";
// function showMyDetails(a = "", b = "", c='') {
//   return `${a}${b}${c}`;
// }
// // Replace ???? With The Available Variables As Argument To Get The Result
// console.log(showMyDetails(theName.split('').slice(0,3).join(''),theName.split('').slice(3,6).join(''))); // Elzero
// Assignment 7
// function showMsg(user?: string, age?: string | number, country?: string) {
//     return `${user}${age}${country}`;
//   }
//   console.log(showMsg());
//   console.log(showMsg("Elzero"));
//   console.log(showMsg("Elzero", 40));
//   console.log(showMsg("Elzero", "40", "Egypt"));
// function printInConsole(...args: any[]) {
//     for (const arg of args) {
//         console.log(`The Value Is ${arg} And Type Is ${typeof arg}`);
//     }
//     console.log("Done");
// }
// // Using The Function
// printInConsole(1, 2, 3, 4, 5);
// printInConsole("A", "B", "C");
// printInConsole(true, false, false, true, true);
function printInConsole(...args) {
    args.forEach(arg => console.log(`The Value Is ${arg} And Type Is ${typeof arg}`));
    console.log("Done");
}
// Using The Function
printInConsole(1, 2, 3, 4, 5);
printInConsole("A", "B", "C");
printInConsole(true, false, false, true, true);
//# sourceMappingURL=main.js.map