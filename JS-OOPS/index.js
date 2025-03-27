// let obj = {};
// obj.__proto__ = 5; // assign a number
// console.log(obj.__proto__); // will not show 5

// Object assing
// let user = {
//   name: "manish",
// };

// let address = {
//   village: "badka teghra",
//   psot: "chootka teghra",
//   thana: "maharaj ganj",
// };

// // will put  all property of addres into user
// Object.assign(user, address);

// console.log("user: ", user);

// // Object assing can be used for the deep clone but nested obj share same object
// let person = {
//   name: "John",
//   age: 30,
//   address: {
//     village: "badka teghra",
//   },
// };

// let clone = Object.assign({}, person);

// clone.name = "manish";
// clone.address.village = "gurugram";
// console.log("person: ", person);
// console.log("clone: ", clone);


// // Arrow functions have no “this”

// let user1 = {
//     firstName: "Ilya",
//     sayHi() {
//       let arrow = () => alert(this.firstName);
//       arrow();
//     }
//   };
  
//   user1.sayHi(); // Ilya

  
  
// //   Constructor, operator "new"

// function User(name) {
//     this.name = name;
//     this.isAdmin = false;
//   }
  
//   let user3 = new User("Jack");
  
//   alert(user3.name); // Jack
//   alert(user3.isAdmin); // false

//   // constructor function work like this

//   function User(name) {
//     // this = {};  (implicitly)
  
//     // add properties to this
//     this.name = name;
//     this.isAdmin = false;
  
//     // return this;  (implicitly)
//   }


//   // Prototypal inheritance

//   let animal = {
//     eats: true
//   };
//   let rabbit = {
//     jumps: true
//   };
  
//   rabbit.__proto__ = animal; // (*)
  
//   // we can find both properties in rabbit now:
//   console.log( rabbit.eats ); // true
//   console.log( rabbit.jumps ); // true


//   //

//   let animal1 = {
//     eats: true
//   };
  
//   function Rabbit(name) {
//     this.name = name;
//   }
  
//   Rabbit.prototype = animal1;
  
//   let rabbit = new Rabbit("White Rabbit"); //  rabbit.__proto__ == animal
  
//   alert( rabbit.eats ); // true


  // Object CREATE AND OBJECT ASSIGN
  // const animal2 = {
  //   speak() {
  //     console.log('Animal speaks');
  //   }
  // };
  
  // const dog = Object.create(animal2); // dog inherits from animal

  // console.log("dong: ", dog);
  // dog.speak(); // "Animal speaks"

  class User {
    constructor(name) {
      this.name = name;
    }
  
    sayHi() {
      console.log("name: ", this.name);
    }
  
  }
  
  // Usage:
  let user = new User("John");
  console.log("user: ", user);
  user.sayHi();
  
