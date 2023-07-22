//singleton only by constructor
    // Object.create



//object literals

/* 

document:- 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#symbol_type

*/


const mySym = Symbol("key1");



const jsUser = {
    name: "prakash",
    "last": "niture",
    age: 18,
    [mySym]: "mykey1",
    location: "india",
    email:"example@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Sunday"]
}

// console.log(jsUser.email);    //not preferred
// console.log(jsUser["email"]); //preferred
// console.log(jsUser["last"]);

// console.log(jsUser[mySym]);
// console.log(typeof jsUser.mySym); //symbol

jsUser.email = "abc@gmail.com";
// Object.freeze(jsUser);
jsUser.email = "zxy@gmail.com";
// console.log(jsUser); 



jsUser.greeting = function(){
    console.log("hello");
}
jsUser.greetingTwo = function(){
    console.log(`Hello ${this.name}`);
}

// console.log(jsUser.greeting); // [Function (anonymous)]
console.log(jsUser.greeting()); // hello
console.log(jsUser.greetingTwo()); //hello prakash


