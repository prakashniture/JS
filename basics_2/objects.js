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
// console.log(jsUser.greeting()); // hello
// console.log(jsUser.greetingTwo()); //hello prakash



// const user = new Object()  //singleton object
// const user = {}            //non-singleton object
// console.log(user); //{}


const user = {}
user.id = "123";
user.name = "abcd";
user.isLoggedIn = false

// console.log(user);

const reUser ={
    email: "some@gmail.com",
    fullName:{
        userFullName:{
            firstName: "abc",
            lastName: "zxy"
        }
    }
}

// console.log(reUser.fullName.userFullName.lastName);

const obj1 = {1: "a", 2:"b"}
const obj2 = {3: "a", 4:"b"}

// const obj3 = {obj1, obj2}

// const obj3 = Object.assign({}, obj1, obj2)
          // Object.assign(target, source);

/*
document:-
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
*/

const obj3 = {...obj1, ...obj2}

// console.log(obj3);


const users = [
    {
        id: 1,
        email: "abc@gmail.com"
    },
    {
        id: 1,
        email: "abc@gmail.com"
    },
    {
        id: 1,
        email: "abc@gmail.com"
    },
]

users[1].email
// console.log(user); //data type objects

// console.log(Object.keys(user)); //data type array
// console.log(Object.values(user));
// console.log(Object.entries(user));

// console.log(user.hasOwnProperty('isLoggedIn')); //true, isLoggedIn is available in user object