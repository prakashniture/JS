const user = {
    userName: "abc",
    price: 777,

    welcomeMessage: function(){
        console.log(`${this.userName} welcome to website`);
        // console.log(this);
    }


}
// user.welcomeMessage();
// user.userName = "sam";
// user.welcomeMessage();

// console.log(this);



// function one(){
//     let userName = "hello";
//     console.log(this.userName);  
// }
// one();

// const one = function (){
//     let userName = "hello";
//     console.log(this.userName);  
// }
// one();


// const one = () => {
//     let userName = "hello";
//     console.log(this);  
// }
// one();



// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }
// console.log(addTwo(3,5));



// const addTwo = (num1, num2) => (num1 + num2);

// const addTwo = (num1, num2) => ({userName:"abc"});

// console.log(addTwo(3,5)); 










