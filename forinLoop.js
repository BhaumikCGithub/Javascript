const myObj = {
    'name1' : 'Bhaumik',
    'name2' : 'Mihir',
    'name3' : 'Jeel',
    'name4' : 'Harshit'
}

for (const key in myObj) {
    console.log(`${key} is ${myObj[key]}.`)
}

const arr = [1,2,3,4,5]

for (const key in arr) {
    console.log(arr[key]);
    //console.log(key)  //key print thase 0,1,2,3,4    
}

const myMap = new Map();
myMap.set('IN', "India")
myMap.set('USA', "United State of America")
myMap.set('FR', "Frane")
myMap.set('IN', "India")

for (const key in myMap) {
    console.log(key);
}

//forin loop not applicable for map