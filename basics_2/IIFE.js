//Immediately invoked function expressions (IIFE)

// function run immediatly, no need to call, { }


// function one(){
//     console.log("DB Connected");
// }
// one();

(function one(){
    console.log("DB Connected");
})();


( (name) => {
    console.log(`DB connected two ${name}`);
})('abc');