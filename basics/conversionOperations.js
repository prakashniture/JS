// let score = "33"  //string
// let score = "33abc";  //NaN
// let score = "Name"    //NaN
// let score = null;      // 0
//let score = undefined  //undefined
// let score = true  //1
let score = false   //0


// console.log(typeof score);
console.log(typeof(score));   

let valueNumber = Number(score);   //converting score to number
console.log(valueNumber);   //NaN -> not a number
console.log(typeof valueNumber);  //number


// "33" => 33
// "33abc" => NaN
// true => 1; false => 0

// let isLoggedIn = 1;   //true
// let isLoggedIn = 0;   //false
// let isLoggedIn = "";     //false 
let isLoggedIn = "Prakash"; //true

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

//  1;        //true
//  0;        //false
//  "";       //false 
// "Prakash"; //true


let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber);  //"33"
console.log(typeof(stringNumber));  //string
