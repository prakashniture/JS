const name = "Prakash ";
const repo = 50;

// console.log(name + repo + " value"); //not prefer

// console.log(`Hello my name is ${name.toUpperCase()} and my repo is ${repo}`);




const gameName = new String('hello - js - learning');
// console.log(gameName);                   //try in console
// console.log(gameName[0]);
// console.log(gameName[1]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());   //origianl value is not changed
// console.log(gameName.charAt(1));
// console.log(gameName.indexOf('e'));


// console.log(gameName.split('-'));

// const newString = gameName.substring(0,4);
// console.log(newString);  //hell

// const anotherString = gameName.slice(-7,5);
// console.log(anotherString); //ello

const newStringOne = "    hello     ";
// console.log(newStringOne);
// console.log(newStringOne.trim());  //remove space

/* 
document:-
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
*/

const url = "https://something.com/some%20thing"
// console.log(url.replace('%20','-'));
// console.log(url.includes('some')); //true
