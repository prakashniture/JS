/*
document:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration

*/


// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
// }


// for (let i = 0; i < 10; i++) {
//     const element = i;
//     if(element ==5){
//         console.log("5 is best number");
//     }
//     console.log(element);
// }


// for (let i = 1; i <= 10; i++) {
//     console.log(`Outer loop value: ${i}`);
//     for (let j = 0; j <= 10; j++) {
//         // console.log('Inner loop value ${j} and inner loop ${i}');        
//         console.log(`${i} * ${j} = ${i*j}`);
//     }   
// }


let myArray = ["flash", "batman", "superman"]
// console.log(myArray.length);
for (let i = 0; i < myArray.length; i++){
    const element = myArray[i];
    // console.log(element);
}


// ------ break and continue

// for (let i = 0; i <= 20; i++) {
//     if (i == 5) {
//         console.log('Detected 5');
//         break;
//     }
//     console.log(`Value of i is ${i}`);
// }



// for (let i = 0; i <= 20; i++) {
//     if (i == 5) {
//         console.log('Detected 5');
//         continue;
//     }
//     console.log(`Value of i is ${i}`);
// }


let myArray1 = ['flash', "batman", "superman"]
let arr = 0;
while (arr < myArray1.length) {
    // console.log(`Value is ${myArray1[arr]}`);
    arr = arr + 1;
}



let score =11;
do {
    // console.log(`Score is ${score}`);
} while (score <= 10);




// for of

// for (const iterator of object) {
    
// }

// ["", "", ""]
// [{}, {}, {}]

const arr1 = [1, 2, 3, 4, 5]
for (const i of arr1) {
    // console.log(i);
}



const greetings = "Hello World";
for (const greet of greetings){
    // console.log(`Each char is ${greet}`);
}


//Maps

/*
document:- 

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map

*/
const map = new Map()
map.set('IN', "India");
map.set('USA', "United States of America");
map.set('Fr',"France");
map.set('IN', "India");

// console.log(map);

for (const [key, value] of map) {
    // console.log(`${key} :- ${value}`);
}


const myObject = {
    'game1':'NFS',
    'game2':'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(`${key} :- ${value}`);
// }





//for in
// for (const key in object) {
//     if (Object.hasOwnProperty.call(object, key)) {
//         const element = object[key];
        
//     }
// }


const myObject1 = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift: "swift by apple"
}

for (const key in myObject1) {
    // console.log(`${key} shortcut is for ${myObject1[key]}`);
}


const programming = ["js", "rb", "py", "java", "cpp"];
for (const key in programming) {
    // console.log(programming[key]);
}



// forEach
// array.forEach(element => {
    
// });

const coding = ["js", "rb", "py", "java", "cpp"];

coding.forEach( function(item){
    // console.log(item);
})

coding.forEach((item) => {
    // console.log(item);
})


function printMe(item){
    console.log(item);
}
// coding.forEach(printMe);


coding.forEach((item, index, arr) => {
    // console.log(item, index, arr);
})



const myCoding =[
    {
        languageName : "javascript",
        languageFileName : "js"
    },
    {
        languageName : "java",
        languageFileName : "java"
    },
    {
        languageName : "python",
        languageFileName : "python"
    },
]
myCoding.forEach( (item) =>{
    console.log(item.languageFileName);
})





