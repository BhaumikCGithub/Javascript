const myNum = [1,2,3,4,5,6,7,8,9,10];

//const filterNum = myNum.map( (num) => num + 10 )

const filterNum = myNum
    .map( (num) => num * 10 )
    .map( (num) => num + 1)
    .filter ( (num) => num > 50)
console.log(filterNum)

//scope add karo to return karvu padse