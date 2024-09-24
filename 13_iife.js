//Immediately Invoked Function Expressions (IIFE)

/* why we use IIFE?
global scope ma variable declare hoy ne function ma pan variable declare karie to kyarek variable
global scope thi polute thai jay etle ma ek alag j scope banavi levano
*/
(function IIFE(){
    //named IIFE
    console.log(`Database connected`)
})();

( () => {
    //unnamed IIFE
    console.log(`Database connected 2`)
})();

( (name) => {
    console.log(`My name is ${name}`)
})("Bhaumik")




//jyare 2 IIFE function sathe run karie tyare ; lagavvu pade end ma context rokva maye
//otherwise gives error