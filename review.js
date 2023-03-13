// let, const, var
// console.log(a);
// var a = 10;

// const a = 10;
// a = 12;
// console.log(a);

// declaration function
// function sum(a, b) {
//   return a + b;
// }

// expression function
// const sum = function (a, b) {
//   return a + b;
// };

// arrow function
// const sum = (a, b) => {
//   return a + b;
// };

// const sum2 = (a, b) => a + b;

// spread, rest parameter
// const sum2 = (a, b) => {
//   return a + b;
// };

// const sum3 = (a, b, c) => {
//   return a + b + c;
// };

// rest parameter
// const sum = (...arr) => {
//   console.log(arr);
//   for (let i = 0; i < arr.length; i++) {
//     ans += arr[i];
//   }
//   return ans;
// };

// spread
// console.log(sum(...arr));
// const arr = [1, 2, 3, 4, 5];
// console.log(...arr);

// destructuring
// const vehicleOne = {
//   brand: "Ford",
//   model: "Mustang",
//   type: "car",
//   year: 2021,
//   color: "red",
// };
// const { brand: brand1, model: model1, type: type1, year, color } = vehicleOne;
// console.log(brand1, model1, type1, year, color);
// console.log(vehicleOne);

// clone 1 new object
// const vehicleTwo = { ...vehicleOne };
// vehicleOne.year = 2023;
// console.log(vehicleTwo);

// console.log(vehicleOne.brand);
// console.log(vehicleOne["brand"]);

// for, for in, for of
// const arr = [1, 2, 3, 4, 5];
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i] + " ");
// }
// for in -> index: i 0 -> arr.length -1
// for (let i in arr) {
//   console.log(arr[i]);
// }
// for of -> value
// for (let i of arr) {
//   console.log(i);
// }

// const person = {
//   name: "hung",
//   age: 18,
// };
// 1: person.name
// 2: person['name']
// for in: obj -> key
// for (let i in person) {
//   console.log(i, person[i]);
// }

// forEach
// const arr = [1, 2, 3, 4, 5, 1];
// arr.forEach(function (item, key) {
//   console.log(item);
// });

// find -> tim 1 gia tri
// const item = arr.find(function (item, key) {
//   return item == 1;
// });
// console.log(item);

// filter -> tim nhieu gia tri
// const item = arr.filter((item, key) => {
//   return item == 1;
// });
// console.log(item);

// fn1();
// fn2(() => {
//   setTimeout(() => {
//     console.log(2);
//     fn3();
//   }, 0);
// });
// fn3();
// callback: non-blocking -> blocking

// const cbhell = () => {
//   setTimeout(() => {
//     console.log(1);
//     setTimeout(() => {
//       console.log(2);
//       setTimeout(() => {
//         console.log(3);
//         setTimeout(() => {
//           console.log(4);
//           setTimeout(() => {
//             console.log(5);
//           }, 1000);
//         }, 1000);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// };

// cbhell();

// function getRandomInt(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
// }

// Promise -> khac phuc callback hell
// const promise = new Promise((resolve, reject) => {
//   resolve(1);
// });
// promise
//   .then((ans) => {
//     console.log(ans);
//     return 2;
//   })
//   .then((ans) => {
//     console.log(ans);
//     return 3;
//   })
//   .then((ans) => {
//     console.log(ans);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => {
//     console.log("done!");
//   });

// Async await
// function resolveAfter2Seconds() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       //   resolve("resolved");
//       reject("some error");
//     }, 2000);
//   });
// }
// async function asyncCall() {
//   console.log("calling");
//   -> Promise
//   resolveAfter2Seconds()
//     .then((result) => {
//       console.log(result);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
//   -> Async await
//   try {
//     const result = await resolveAfter2Seconds();
//     console.log(result);
//   } catch (err) {
//     console.log(err);
//   }
// }

// object constructor js -> hoisting
// const p1 = new Person("hung", 18);
// console.log(p1);
// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// // Class
// class Person2 {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }
// const p2 = new Person2("hung", 18);
// let name = "hung";
// let age = 18;
// const test = {
//   name,
//   age,
// };

// console.log(test);
