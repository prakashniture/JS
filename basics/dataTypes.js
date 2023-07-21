"use strict"; // treat all js code as newer version

// alert("hello"); //we are using nodejs, not browser

/*
document :- 
https://developer.mozilla.org/en-US/docs/Web/API/Window/alert

https://tc39.es/ecma262/


https://tc39.es/ecma262/#sec-typeof-operator
*/

let name = "Prakash"
let age = 18
let isLoggedIn = true
let state;         //undefined
let city = null;  //null

// console.log(typeof "prakash"); //string
// console.log(typeof age);       //number
// console.log(typeof null);      //object
// console.log(typeof undefined); //undefined



// const score = 100; //Number
// const score = 100.20; //Number (even float)


const id = Symbol('123');
const anotherId = Symbol('123');
// console.log(id === anotherId); //false




/*
    ** Primitive **
Number
BigInt => 86857449796586977n
String => ""
Boolean =>true/false
null   => standalone value
undefined => still value not defined
Symbol  => unique

      ** Non-Primitive (Reference) **
object
Array
functions

Javascript is a dynamic typing language.

*/


//Array
const heros = ["shaktiman", "ironman", "spiderman"]
// console.log(typeof(heros));  //function-object



//object
let myObj = {
    name:"Prakash",
    age: 18,
}
// console.log(typeof(myObj));  //object


//function
const myFunction = function(){
console.log("hello js");
}
// console.log(typeof(myFunction)); //object-function




/*
******************************************

javaScript memory-:

1) Stack memory (Primitive) get copy, not change in original value
2) Heap memory (Non-Primitive) get reference, change in original value

*/

let myName = "Prakash";
let anotherName = myName;
anotherName = "Tamma";
// console.log(myName);  //Prakash
// console.log(anotherName); //Tamma




let userOne = {
    email:"user@gmail.com",
    upi:"user@ybl"
}
let userTwo = userOne
userTwo.email = "admin@gmail.com";
console.log(userOne.email);
console.log(userTwo.email);





