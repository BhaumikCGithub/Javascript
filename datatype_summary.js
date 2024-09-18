//Javascript dynamically typed language.(variable no type declare karvani jarur nathi)
/*Primitive
Number,String,Boolean,Null,Undefined,Symbol,BigInt

Reference (Non primitive)
Array,Object,Function*/

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const tempature  = null
let userEmail
const bigNumber = 123444585455934n

const id = Symbol('123')
const anotherId = Symbol('123')


const heroes = ["shaktiman", "nagraj", "doga"]
let obj = {
    name : "Bhaumik",
    age : 23,
}

const myFunction = function (){
    console.log("Hello Bhaumik");
}
myFunction();


// ++++++++++++++++++ Memory ++++++++++++++++++

//Memory type : Stack(Primitive), Heap(Non-primitive)

let name = "Bhaumik"

let anotherName = name
anotherName = "Mihir"

// console.log(name);
// console.log(anotherName)

let user1 = {
    email : "bhaumik@gmail.com",
    upi : "bhaumik@oksbi"
}

let user2 = user1

user2.email = "mihhir@gmail.com"

console.log(user1);




