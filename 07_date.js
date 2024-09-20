//Dates

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toJSON());
console.log(typeof myDate);

let createMyDate = new Date(2024, 0, 20) // In JS month is start from 0
console.log(createMyDate.toDateString())
createMyDate = new Date(2024, 0, 20, 11, 11, 11)
console.log(createMyDate.toLocaleString())
createMyDate = new Date("2024-09-20")
console.log(createMyDate.toLocaleString())
createMyDate = new Date("09-20-2024")
console.log(createMyDate.toLocaleString())

let mytimeStamp = Date.now()
console.log(mytimeStamp);
console.log(createMyDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = createMyDate.toLocaleString('default',{
    weekday: "long",

})

console.log(newDate);
