// function myFun(){
//     console.log("hello");
// }
// myFun();

// function addNumber(num1, num2){   //parameters
//     console.log(num1 + num2);
// }
// addNumber(2,"a");   //arguments

// const result = addNumber(3, 5)
// console.log("Result: ", result);



// function addNumber(num1, num2){   //parameters
//     let result = num1 + num2;
//     console.log("some");
//     return result;
//     console.log("something"); //never print after return
// }

// const result = addNumber(3, 5)
// console.log("Result: ", result);


// function addNumber(num1, num2){   
//     return num1 + num2;
// }



// function user(userName){   // or function user(userName = "abc")
//     if(!userName){
//         console.log("please enter username");
//         return;
//     }
//     return `${userName} just logged in`;
//}
// console.log(user("abc"));
// console.log(user());    //undefined



function calC(...num1) {
    return num1;
}
// console.log(calC(200, 400, 500));  



const user = {
    userName: "abc",
    price: 200
}
function handleObject(anyObject){
    // console.log(`username is ${anyObject.userName} and price is ${anyObject.price}`);
}
// handleObject(user);

handleObject({
    userName:"zxy",
    price: 400
})

const newArray = [200, 400, 100, 500]
function returnSecondValue(getArray){
    return getArray[2]
}
// console.log(newArray);
// console.log(returnSecondValue([200, 499, 599, 654]));



