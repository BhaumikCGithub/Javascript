// function scope
var c = 300
let a = 300
if(true)
{
    let a = 10
    const b = 20
    var c = 30
}

// if ni under block scope and bahar globl scope
// global scope ni value block scope ma avi sake
//block scope ni value block ni under j rhe
//console.log(a)
//console.log(b)
//console.log(c)
// ***************************************************

function one(){
    const username = "Bhaumik"

    function two(){
        const age = "23"
        console.log(username)
    }
    //console.log(website)
    //two()
}
one()

if(true)
{
    const username = "Bhaumik"
    if(true)
    {
        const age = "22"
        console.log(username)
    }
    console.log(age)
}
console.log(username)

// +++++++++++++++++++++++++++++++++++++ Interesting ++++++++++++++++++++++++++++++++++

console.log(addOne(5))
function addOne(num){
    return num + 1 
}

console.log(addTwo(4))
//expression
const addTwo = function(num){
    return num + 2
}

