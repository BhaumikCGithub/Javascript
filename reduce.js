//documentation in mdn

const myNum = [1,2,3,4,5];

// const filterNum = myNum.reduce( function (acc,curVal) {
//     console.log(`ACC ${acc} and Val ${curVal}`);
//     return acc + curVal
// }, 10)

/*const filterNum = myNum.reduce( (acc, cur) => acc+cur, 0)
console.log(filterNum)*/

const cart = [
    {
        item : 'js',
        price : 999
    },
    {
        item : 'python',
        price : 2999
    },
    {
        item : 'android',
        price : 4999
    },
    {
        item : 'AI',
        price : 9999
    },
    {
        item : 'data science',
        price : 12999
    },
]

const totalPrice = cart.reduce( (acc,item) =>  {
    return acc + item.price 
}, 0)
console.log(totalPrice);
