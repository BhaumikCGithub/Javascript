/*
object declare karvana 2 way : literal,constructor

singleton : construtor thi bbanavo to singleton bane matlab apne tarah ka ek hi object he 
bija ma multiple instance bani jay

literal ma singleton na bane
*/

//constructor
Object.create  

//object literals


//Symbol(extra)
const mySmbl = Symbol("key1")

//literal
const jsUser = {              
    "full name" : "Bhaumik Chauhan",
    [mySmbl] : "mykey1",
    age : 23,
    city : "Gondal",
    email : "bhaumik2gmail.com"
} 

// console.log(typeof jsUser[mySmbl])
// console.log(jsUser["full name"])
// console.log(jsUser)
// Object.freeze(jsUser)
//jsUser.email = "mihir2gmail.com"

jsUser.message = function(){
    console.log("HELLO")
}
jsUser.message1 = function(){
    console.log(`HELLO ${this["full name"]}`)
}

console.log(jsUser.message());
console.log(jsUser.message1());

//const tinderUser = new Object()
const tinderUser = {}

//both gave same result

tinderUser.id = "123abc"
tinderUser.name = "Bhaumik"
tinderUser.isLoggedIn = false

//console.log(tinderUser)

const demoUser = {
    email : "mihir@gmail.comm",
    fullname : {
        userfullname : {
            firstname : "mihir",
            lastname : "patel"
        }
    }
}

//console.log(demoUser.fullname.userfullname.firstname)

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}

const obj3 = {obj1, obj2}
const obj4 = Object.assign({}, obj1, obj2)
const obj5 = {...obj1, ...obj2}
console.log(obj5)

const users = [
    {
        id : 1,
        name : "Bhaumik"
    },
    {
        id : 2,
        name : "Mihir"
    },
    {
        id : 3,
        name : "Jeel"
    },
]

// console.log(tinderUser)
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('name'))

// ******************** Object de-structure and JSON API intro *********************************** //

const course = {
    course : "Fit With Me",
    price : "999",
    coach : "Mihir"
}

const {coach} = course
//const {coach : fitnessCoach} = course
console.log(`Coach name ${fitnessCoach}`)

/* JSON structure
{
    "name" : "Bhaumik",
    "age"  : "23",
    "city" : "Gondal"
}
*/

/*
[
    {},
    {},
    {}
]
Array Object na form ma pan male API data
*/ 