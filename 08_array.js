const array = [0,1,2,3,4,5]
// console.log(typeof array)
// console.log(array[1])


/*
Array shallow copy ma ave
Shallow copy means array ne koi nava naam thi asign kari ane nava array ma change kari to rigional array
ma pan change thai jay(Heap memory)

Deep copy ma same reference na hoy etle changes ni effect no ave(Stack memory)
*/

const alphabet = ["a","b","c"]
const arr = new Array(1,2,3,4,5)

arr.push(6)
arr.pop()
arr.unshift(9)
arr.shift()
arr.includes(3)
arr.indexOf(9) //give -1

const newarr = arr.join() //convert array into string

//slice,splice

// console.log("A", arr)
// const arr1 = arr.slice(1,3)
// console.log(arr1)
// console.log("B", arr)
// const arr2 = arr.splice(1,3)
// console.log(arr2)
// console.log("C", arr)

// ***************************************************************

const heroes = ["thor", "hulk", "spidermn", "ironman"]
const heroes1 = ["superman", "flash", "batman"]

//heroes.push(heroes1) push in same array
//const allHeroes = heroes.concat(heroes1) //push in new array 
//const allHeroes = [...heroes, ...heroes1]
//console.log(allHeroes)

const ar = [1,2,3,[4,5,6],7,[6,7,[8,9]]]
const setar = ar.flat(10)
console.log(setar)

console.log(Array.isArray("Bhaumik"))
console.log(Array.from("Bhaumik"))
console.log(Array.from({name : "Bhaumik"}))

const n1 = 100
const n2 = 200
const n3 = 300

console.log(Array.of(n1,n2,n3))