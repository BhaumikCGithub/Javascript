// ********************* for of loop  *********************

// ["","",""]
// [{},{},{}]

const arr = [1,2,3,4,5]
for (const value of arr) {
    console.log(value);   
}

const greetings = "Hello World"
for (const greet of greetings) {
    console.log(`Each character is ${greet}`);
}

//Maps
//for documentation visit MDN
const map = new Map();
map.set('IN', "India")
map.set('USA', "United State of America")
map.set('FR', "Frane")
map.set('IN', "India")

for (const key of map) {
    console.log(key);
}

for (const [key,value] of map) {
    console.log(key,':-',value);
}

const myObj = {
    'name1' : 'Bhaumik',
    'name2' : 'Mihir',
}

for (const [key,value] of myObj) {
    console.log(key,':-',value);
}
//object is not iteratable by forof loop 