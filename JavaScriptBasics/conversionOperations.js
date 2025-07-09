let score = "56"
console.log(score)
//converts string to number
let  convertScore = Number(score)
console.log(typeof(convertScore))

let isLoggedIn = false
let randomString = "33abc"
console.log(Number(randomString))

/*
"" or null ==> 0
"33abc" or undefined ==> undefined
*/
randomNumber = null
let stringNumber = String(randomNumber)
console.log(stringNumber) // null
console.log(typeof(stringNumber)) //string

let value = 3
let negative = -value
console.log(negative)

console.log(2+2)
console.log(2*3)
console.log(2%2)
console.log(2**2)//exponent

let firstName = 777
let middleName = "harry"
let lastName = "kane"

console.log(firstName + middleName + lastName)
console.log(1 + 2 + "2") //32
console.log("1" + 2 + 2) //122 if the first input is a string the rest get read as a string

console.log(+true) // value is 1
console.log(+"") // value is 0

let gameCounter = 100
gameCounter++ // incrementing gameCounter
console.log(gameCounter)

