//print to console
console.log("Hello World")
//declare constant variable
//do not use var to declare variables, it make them global
const accountID = 2345
var accountPassword = "password"
//implicitly declares as a var
accountCity = "Waterloo"
let accountProvince;
//declare string
let accountemail = "name@google.com"
console.log(typeof(accountID))
//accountemail = 2345
//typeof tells you what the datatype is
console.log(typeof(accountemail))

console.log("user account ID is: "+accountID+ " and account email is: "+accountemail);
//different ways of printing to the console
console.log(`user account ID is: ${accountID} and account email is ${accountemail}`)
//javascript is smart enough to figure out what is in the brackets
console.log(3+3)

let name = "turco"
let age = 20
let isLogged = false
let province

console.log(typeof(province))
/*
string
number
boolean
undefined
null
 */

console.log(typeof(undefined))
console.log(typeof(null))