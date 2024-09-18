const name = "Bhaumik"
const age = 23

//not right way to concatinate string
//console.log(name + age);

//use string interpolation

console.log(`My name is ${name} and my age is ${age}.`)

//another way to declare string
const gameName = new String('Free-Fire');
console.log(gameName)
console.log(gameName.__proto__)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf('e'))

const newString = gameName.substring(0,6)
console.log(newString)
