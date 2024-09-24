function printMyName()
{
    console.log("Bhaumik")
}

//printMyName()
//here printMyName is fn reference and () is for execution

//here num1,num2 are fn parameters
// function addnumber(num1, num2){
//     console.log(num1+num2); 
// }

function addnumber(num1,num2)
{
    let result = num1 + num2
    return result //return num1+num2
}

const ans = addnumber(2,3) //here 2,3 are function arguments
//console.log(ans)

function loginUserMsg(username){ //jo value pass no kare to function loginUserMsg(username) karie to if ma jase j nai 
    if(username === undefined)
    {
        return "Please Enter Username First"
    }
    return `${username} just logged in`
}

console.log("Output 1", loginUserMsg())
console.log("Output 2", loginUserMsg("Bhaumik"))
//jo value pass na karie to undefined retuurn kare

function calculateCartPrice(val1,...num1)
{
    return num1
}

//for multiple value we have to use rest operator in fn parameter
console.log(calculateCartPrice(200,300,500))

const user = {
    name : "Bhaumik",
    age : "23"
}

function handleObject(anyObject)
{
    return `My name is ${anyObject.username} and my age is ${anyObject.age}.`
}

console.log(handleObject(user))
console.log(handleObject({
    name : "Mihir",
    age : "23"
}));

const myNewarr = [200,400,500,600]

function returnSecond(getArray)
{
    return getArray[1];
}

console.log(returnSecond(myNewarr))
console.log(returnSecond([100,20,0,200]))