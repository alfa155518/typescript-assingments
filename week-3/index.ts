
//********** Assignment 1 *************//

// Edit The Interface To Fix The Problems
// interface Member {
//     id:  number|string;
//     username: string;
//     country?: string;
//     state: boolean;
//     getName:() => string
//   }

// Do Not Edit The Code Below
//   let user: Member = { // Property 'country' is missing in type
//     id: 100,
//     username: "Elzero",
//     state: true,
//     getName() { // 'getName' does not exist in type 'Member'
//       return this.username;
//     }
//   }

//   user.id = 200;
//   user.id = "200"; // Type 'string' is not assignable to type 'number'
//   user.state = false; // Cannot assign to 'state' because it is a read-only property





//********** Assignment 2 *************//

// Create Interface Here

// interface Client {
//     id:number,
//     username:string,
//     active:boolean,
//     discount:number
//     getPrice:(price:number) => number
// }

// Do Not Edit The Code Below
// let client: Client = {
//     id: 100,
//     username: "Elzero",
//     active: true,
//     discount: 10,
//     getPrice(price: number) {
//       return price - this.discount;
//     }
//   }

//   console.log(`Client Id Is ${client.id}`);
//   console.log(`Client Name Is ${client.username}`);
//   console.log(`Client Has Dicount ${client.discount}`);
//   console.log(`Client Product After Discount Is ${client.getPrice(200)}`);




//********** Assignment 3 *************//


// Do Not Edit The Code Below
// interface Man {
//     title: string;
//     weight: number;
//     age: number;
//   }

//   interface Bird {
//     canFly: boolean;
//   }

//   interface Superman extends Bird,Man {
//     bodyType:string,
//     origin:string
//   }

//   let creature: Superman = {
//     title: "Superman",
//     weight: 100,
//     age: 500,
//     canFly: true,
//     bodyType: "Iron",
//     origin: "Krypton"
//   }
// console.log(creature)




//********** Assignment 4 *************//

// Create Class Here

// class Player {
//     user:string
//     type:string
//     level:string|number
//     status?:boolean
//     constructor(user:string,type:string,level:string|number,status?:boolean) {
//         this.user = user
//         this.type = type
//         this.level = level
//         this.status=status
//     }
//     details() {
//         return `${this.status === true ?`VIP ${this.user}`:this.user},Type Is ${this.type} Level IS ${this.level}`
//     }
// }

// Do Not Edit The Code Below
// let player1 = new Player("Osama", "Mage", 90, true);
// let player2 = new Player("Shady", "Archer", "85", false);
// let player3 = new Player("Amr", "Fighter", 50, true);
// let player4 = new Player("Mahmoud", "Assassin", 77);

// console.log(player1.details()); // VIP Osama, Type Is Mage Level Is 90
// console.log(player2.details()); // Shady, Type Is Archer Level Is 85
// console.log(player3.details()); // VIP Amr, Type Is Fighter Level Is 50
// console.log(player4.details()); // Mahmoud, Type Is Assassin Level Is 77






//********** Assignment 5 *************//

// class Shorten {
//     id: number;
//     username: string;
//     protected title?: string;
//     constructor (id: number, username: string, title?: string) {
//       this.id = id;
//       this.username = username;
//       this.title = title;
//     }
//   }

//   let tester = new Shorten(100, "Elzero");
//   console.log(tester.id);
//   console.log(tester.username);




//********** Assignment 6 *************//

// class Show {

//     constructor (private _title: string) {}
//     get title(): string {
//       return this._title;
//     }
//   }

//   let tester = new Show("Elzero");

//   console.log(tester.title); // Property 'title' does not exist on type 'Show'
//   tester.title = "Osama"; // Property 'title' does not exist on type 'Show'
//   console.log(tester.title); // Property 'title' does not exist on type 'Show'
















//********** Assignment 7 *************//

// interface Play {
//   id: number;
//   title: string;
//   level: number | string;
//   logIn(): void;
//   logOut(msg: string): void;
// }

// Create Your Class Here
// class Player implements Play {
//   id: number;
//   title: string;
//   level: string | number;
//   logIn: () => void;
//   logOut: (msg: string) => void;
//   constructor(id: number, title: string, level: string | number) {
//     this.id = id
//     this.title = title
//     this.level = level
//     this.logIn = function (): void {
//       console.log('Logged In')
//     }
//     this.logOut = (msg: string) => {
//       console.log(msg)
//     }
//   }

// }

// let player1 = new Player(100, "Elzero", 95);

// console.log(player1.id); // 100
// console.log(player1.title); // "Elzero"
// console.log(player1.level); // 95
// player1.logIn(); // Logged In
// player1.logOut("Good Bye"); // Logged Out, Good Bye



