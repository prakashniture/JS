// ************ typeConversion************

// let score = "33"  //string
// let score = "33abc";  //NaN
// let score = "Name"    //NaN
// let score = null;      // 0
//let score = undefined  //undefined
// let score = true  //1
let score = false   //0


// console.log(typeof score);
// console.log(typeof(score));   

let valueNumber = Number(score);   //converting score to number
// console.log(valueNumber);   //NaN -> not a number
// console.log(typeof valueNumber);  //number

/*
"33" => 33
"33abc" => NaN
true => 1; false => 0
*/

// let isLoggedIn = 1;   //true
// let isLoggedIn = 0;   //false
// let isLoggedIn = "";     //false 
let isLoggedIn = "Prakash"; //true


let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn);

/*
//  1;        //true
//  0;        //false
//  "";       //false 
// "Prakash"; //true
*/

let someNumber = 33
let stringNumber = String(someNumber)
// console.log(stringNumber);  //"33"
// console.log(typeof(stringNumber));  //string


// ********************** Operations ****************

let value = 3;
let negValue = -value;
// console.log(negValue);  //-3

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2/2);
// console.log(2**3);  // 2 power 3
// console.log(2%3);   // reminder

let str1 = "hello ";
let str2 = "prakash";
let str3 = str1 + str2;
// console.log(str3);

// console.log("1" + 2);  //12
// console.log(1 + "2");  //12
// console.log("1" + 2 + 2); //122
// console.log(1 + 2 + "2"); //32
// console.log((3 + 4) * 5 % 3);   //it's complicated, try to keep it simple

/* 
document:-
https://tc39.es/ecma262/#sec-toprimitive
*/

// console.log(+true);  //1
// console.log(true+);    //(Error) SyntaxError: Unexpected token ')'
// console.log(+"");   // 0 //don't prefer


// let num1, num2, num3;
// num1 = num2 = num3 = 2+2   //don't prefer 


let gameCounter = 100;
++gameCounter;
// gameCounter++;
// console.log(gameCounter);

/* 
document:-
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment
*/
