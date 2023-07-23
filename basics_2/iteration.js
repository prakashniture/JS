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
    // console.log(item.languageFileName);
})



// const value = coding.forEach( (item) => {
//     console.log(item);
//     return item;
// })
// console.log(value);  //forEach return undefined



const num = [1,2,3,4,5,6,7,8,9,10];
// const newNum = num.filter( (num) => num > 4)
// const newNum = num.filter( (num) => (num > 4))
// const newNum = num.filter( (num) => {
//     return num > 4;
// })
// console.log(newNum);


const newNum = [];
num.forEach( (num) => {
    if (num > 4) {
        newNum.push(num)
    }

})
// console.log(newNum);


const books = [
    {title: 'Book one', genre: 'Fiction', publish: 1981, edition: 2004},
    {title: 'Book Two', genre: 'History', publish: 1970, edition: 2002},
    {title: 'Book Three', genre: 'Science', publish: 2016, edition: 2008},
];

let userBooks = books.filter( (bk) => {
    return bk.genre === 'History';
})

userBooks =  books.filter ( (bk) => (bk.publish >= 2000))

userBooks = books.filter ( (bk) => {
    return bk.publish <= '2000' && bk.genre === 'Fiction';
})
// console.log(userBooks);


const myNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const nNum = myNumber.map( (num) => num + 10)

// const nNum = myNumber.map ( (num) => {
//     return num + 10;
// })

const nNum = myNumber
                .map( (num) => num * 10)
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)

// console.log(nNum);



/*
document:-

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

*/

const myNum = [1, 2, 3]
// const myTotal = myNum.reduce( function (accumulator, currentValue){
//     console.log(` accumulator: ${accumulator} and currentValue: ${currentValue}`);
//     return accumulator + currentValue
// }, 4)


const myTotal = myNum.reduce( (acc, curr) => acc + curr, 4)

// console.log(myTotal);

const shopping =[
   {
    item: "js",
    price: 199
   }, 
   {
    item: "py",
    price: 299
   },
   {
    item: "java",
    price: 899
   },
]
const pricePay = shopping.reduce ( (acc, item) => acc+ item.price, 0)
console.log(pricePay);















