const accountId = 144553
let accountEmail = "Smriti@gmail.com"
var accountPassword ="12345"
accountCity = "Dehradun"
let accountState;

//accountId=2 //Not allowed
accountEmail="SR@gmail.com"
accountPassword ="212121"
accountCity="Bangolre"

console.log(accountId);
/*
Prefer Not to use var beacuse of issue in block scope and functional scope.
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])