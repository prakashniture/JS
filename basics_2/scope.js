// var c = 30;


// if(true){
//     let a = 10;
//     const b = 20;
//     var c = 40;
// }

// // console.log(a);  //ReferenceError
// // console.log(b);  //ReferenceError
// console.log(c); //40


function one(){
    const user  = "abc";

    function two(){
        const website = "YT";
        console.log(user);
    }
    // console.log(website);

    two()
}
// one()

if(true){
    const user = "abc"
    if(user === "abc"){
        const website = "YT";
        // console.log(user + website);
    }
    // console.log(website);
}
// console.log(user);




// ************

console.log(addOne(5));
function addOne(num){
    return num + 1;
}


// console.log(addTwo(5)); //Error
const addTwo = function (num){
    return num + 2;
}
// console.log(addTwo(5));
