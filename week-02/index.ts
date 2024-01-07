
//************* Assignment 1 ****************//

// Write Your Code Here
// type n = number

// Do Not Edit Here
// let myData: n;

// myData = 1000; // No Problem Here
// console.log(myData)

// myData = +true; // No Problem Here
// console.log(myData)



//************* Assignment 2 ****************//

// Write Your Code Here
// type mix = number | boolean

// Do Not Edit Here
// let myInfo: mix;

// myInfo = 1000; // No Problem Here
// console.log(myInfo)

// myInfo = true; // No Problem Here
// console.log(myInfo)




//************* Assignment 3 ****************//

// Write Your Code Here

// type Info = {
//     theName:string,
//     theAge:number
// }

// type Full = {
//     theName:string,
//     theAge:number,
//     country:string,
// }


// Do Not Edit Here
// function showInfo(data: Info) {
//     console.log(`The Name Is ${data.theName}`);
//     console.log(`The Age Is ${data.theAge}`);
//   }
//   console.log(showInfo({ theName: "Elzero", theAge: 40 }));

//   function showFullInfo(data: Full) {
//     console.log(`The Name Is ${data.theName}`);
//     console.log(`The Age Is ${data.theAge}`);
//     console.log(`The Country Is ${data.country}`);
//   }
//   console.log(showFullInfo({ theName: "Elzero", theAge: 4, country: "Egypt" }));




//************* Assignment 4 ****************//

// function yesOrNo(val: number):number | boolean  {
//     return val > 10;
// }
  // Do Not Edit Here
//   console.log(yesOrNo("100")); // Error
//   console.log(yesOrNo(30)); // True
//   console.log(yesOrNo(8)); // False





//************* Assignment 5 ****************//

// function isHeOld(age: number) : boolean | number {
//     return age > 40;
//   }

  // Do Not Edit Here
//   console.log(isHeOld("100")); // Error
//   console.log(isHeOld(45)); // "Yes"
//   console.log(isHeOld(30)); // "No"



//************* Assignment 6 ****************//

// let post:[number,string,boolean]

// post = [100, 200, "Title"]; // Error
// post = ["Title", 100, true]; // Error
// post = [100, "Title", true]; // Good

// post.push("Elzero"); // Error => Cant Add

// Create Destructuring Here
// let [id,title,state] = post
// Do Not Edit Here
// console.log(id); // 100
// console.log(title); // "Title"
// console.log(state); // true



//************* Assignment 8 ****************//

// let myNum = 10

// function result(myNum:number) {
//     return myNum
// }
// enum Game  {
//     Easy=100,
//     Medium= Easy - 20,
//     Hard=Medium - Easy / 2,
//     Insane=result(Hard - myNum),
// }


// Output

// console.log(Game.Easy); // 100
// console.log(Game.Medium); // 80
// console.log(Game.Hard); // 30
// console.log(Game.Insane); // 20



//************* Assignment 8 ****************//

// const user: {
//     username: string,
//     age: number | string,
//     website?: string,
//     skills: {
//         frontEnd: string[],
//         backEnd: any[]
//     }
// } = {
//     username: "Elzero",
//     age: 40,
//     website: "Elzero.org",
//     skills: {
//         frontEnd: ["HTML", "CSS", "JS"],
//         backEnd: ["PHP", "Python"]
//     }
// }

// We Need To Remove Error From This Edits
// user.username = "Osama";
// user.age = "40";
// user.skills.backEnd.push(100);









// #############****************  Solutions Created  By Ahmed Hassob    *************################## //