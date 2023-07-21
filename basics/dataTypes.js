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


