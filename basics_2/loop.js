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
    console.log(`Score is ${score}`);
} while (score <= 10);