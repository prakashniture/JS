const accountID = 1123344;
let accountEmail = "prakash@google.com";
var accountPassword = "12345";
accountCity = "Pune";            //not perfer to write this type variable
let accountState;   //value is not defined
// accountID = 2;   //TypeError: Assignment to constant variable.(not allowed to change value)  


// accountEmail = "niture@google.com";  //niture@google.com
// accountPassword = "54321";    //54321
// accountCity = "udgir";    //udgir

/*
Prefer not to use var
because of issue in block scope & function scope
*/

/*
console.log(accountID);
console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);
*/

console.table([accountID, accountEmail, accountPassword, accountCity, accountState]);