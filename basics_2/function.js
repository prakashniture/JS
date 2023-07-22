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



function user(userName){   // or function user(userName = "abc")
    if(!userName){
        console.log("please enter username");
        return;
    }
    return `${userName} just logged in`;
}
// console.log(user("abc"));
console.log(user());    //undefined

