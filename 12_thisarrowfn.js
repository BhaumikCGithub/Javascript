const user = {
    username : "Bhaumik",
    age : "22",
    welcomeMsg : function(){
        console.log(`${this.username}, welocme to website`)
        //console.log(this)
    }
}

// user.welcomeMsg()
// user.username = "Sam"
// user.welcomeMsg()
console.log(this)
/*mode environment ma this refer karse empty object ne 
kem ke global scope ma koi variable j nathi
jyare aa j console.log(this) browser ma karie tyare Window avse
kem k browser mate global object chhe Window object etle j window ni badhhi event capture kari sakie
*/

// **********************************************************************************

function demo1(){
    let username = "Bhaumik"
    console.log(this.username)
}
//demo1() // output : undefined

const demo2 = function(){
    let username = "Bhaumik"
    console.log(this.username)
}

const demo3 = () => {
    let username = "Bhaumik"
    console.log(this.username)
}

// const addTwo = (num1,num2) => {
//     return num1+num2
// }

//const addTwo = (num1,num2) => num1+num2

//const addTwo = (num1,num2) => (num1+num2)

const addTwo = (num1,numm2) => ({username : "Bhaumik"})
