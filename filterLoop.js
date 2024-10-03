// const coding = ['c', 'c++', 'java', 'pythoon','ruby','javascript']

// const values = coding.forEach( (item) => {
//     console.log(item)
//     return item
// })

// console.log(values);

//aa case ma console.log(values) values = undefined ave chhe to foEach thi values ma store kari use na kari sakie.
//values ne return karva or condition check ma leva mate solution
const myNum = [1,2,3,4,5,6,7,8,9,10];

// const filterNum = myNum.filter( (num) => num > 4)
// console.log(filterNum);

/*const filterNum = myNum.filter( (num) => {
    // num > 4   --> scope ave ete return karvu pade
    return num > 4
} )*/

//Using forEach 
/*const filterNum = [];
myNum.forEach( (num) => {
    if(num > 4){
        filterNum.push(num)
    }
})
console.log(filterNum);*/

const books = [
    {
        title : 'book1',
        genre : 'Fiction',
        publish : 1981,
        edition : 2004
    },
    {
        title : 'book2',
        genre : 'Non-Fiction',
        publish : 1979,
        edition : 2006
    },
    {
        title : 'book3',
        genre : 'History',
        publish : 1989,
        edition : 2010
    },
    {
        title : 'book4',
        genre : 'Fiction',
        publish : 1999,
        edition : 2004
    },
    {
        title : 'book5',
        genre : 'Science',
        publish : 1990,
        edition : 2008
    },
];

//const userBooks = books.filter( (bk) => bk.genre === 'Fiction')
const userBooks = books.filter( (bk) =>  {
    return bk.publish >= 1990 && bk.genre === 'Science'
})
console.log(userBooks);


