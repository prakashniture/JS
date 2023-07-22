/*
document:-
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

https://tc39.es/proposal-temporal/docs/index.html
*/

let myDate = new Date()
    // console.log(myDate.toString());
    // console.log(myDate.toDateString());
    // console.log(myDate.toISOString());
    // console.log(myDate.toLocaleDateString());
    // console.log(myDate.toLocaleString());
    // console.log(myDate.toJSON());
    // console.log(typeof myDate);


// let myCreatedDate = new Date(2023, 0, 23); 
    //  console.log(myCreatedDate.toDateString()); //Mon Jan 23 2023, 0-Jan

// let myCreatedDate = new Date(2023, 0, 23, 5, 3);
    // console.log(myCreatedDate.toLocaleString()); //1/23/2023, 5:03:00 AM

// let myCreatedDate = new Date("2023-01-15");
let myCreatedDate = new Date("01-15-2023");
//     console.log(myCreatedDate.toLocaleString());
    // console.log(myCreatedDate.getTime());

let myTimeStamp = Date.now();
    // console.log(myTimeStamp);

// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
    // console.log(newDate);
    // console.log(newDate.getMonth() + 1);
    // console.log(newDate.getDay());

// `The date is ${newDate.getDay()} and the time is `

    newDate.toLocaleString('default',{
        weekday:"long",
        // timeZone: ""
    })