/* 
document:-

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

https://developer.mozilla.org/en-US/docs/Glossary/Shallow_copy

https://developer.mozilla.org/en-US/docs/Glossary/Deep_copy

*/

// const myArr = [1, 2, 3, 4, 5];
//     console.log(myArr[0]);  // array start with 0

// const numbers = [1,2,3,4]; //try in console
// numbers 

// const myArr1 = new Array(1,2,3,4)
//     console.log(myArr1[0]);

// methods-------

    // myArr1.push(6)  //add element at last
    // myArr1.pop();  //delete last element
    // myArr1.unshift(7); //add on index 0
    // myArr1.shift();       //delete on index 0
    // console.log(myArr1);

    // console.log(myArr1.includes(9)); //9 is available in array? false
    // console.log(myArr1.indexOf(9)); //9 not available in array
    // console.log(myArr1.indexOf(3)); //3 is available in array

    // const newArr = myArr1.join()
    // console.log(myArr1);   //[1, 2, 3, 4]
    // console.log(newArr);    //1,2,3,4
    // console.log(typeof newArr); //string


    //slice, splice-----------

    const myArr1 = new Array(1,2,3,4)
    console.log("A", myArr1);  //A [ 1, 2, 3, 4 ]

    const myn1 = myArr1.slice(1, 3)

    console.log(myn1);      //[ 2, 3 ]
    console.log("B", myArr1); //B [ 1, 2, 3, 4 ]

    const myn2 = myArr1.splice(1,3)
    console.log("C", myArr1);  //C [ 1 ]
    console.log(myn2);       //[ 2, 3, 4 ] , splice manipulate original array
    