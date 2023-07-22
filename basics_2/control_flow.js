// false  values==>> 0, -0, BigInt 0n, "", null, undefined, NaN

// true values ==>> "0", 'false', " ", [], {}, function(){}
// (false == 0) //true
// (false == '') //true
// (0 == '') //true


// == ,!=, <, >, <=, >=, ||, &&, !, ===, !===


// if( 2 !== "2"){
//     console.log("executed");
// }


// const score = 200;
// if(score > 100){
//     const power = "fly";
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`);  //Error



// if(condition){
// } else if(condition){
// }


const emptyObj ={}

if (Object.keys(emptyObj).length === 0){
    console.log("object is empty");
}


// Nullish coalescing operator (??): null undefined

let val1;
val1 = 5 ?? 10
console.log(val1);

let val2;
val2 = null ?? 10
console.log(val2);

let val3;
val3 = undefined ?? 20
console.log(val3);

let val4;
val4 = null ?? 10 ?? 30
console.log(val4);


//Terniary operator---------

//condition ? true : false

const price = 100;
price <= 80 ? console.log("less than 80") : console.log("more than 80");



