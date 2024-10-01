/*
const coding = ['c', 'c++', 'java', 'pythoon','ruby','javascript']

coding.forEach( function (item) {
    console.log("Output 1",item);
})

coding.forEach( (item) => {
    console.log("Output 2",item);
})

function print(item){
    console.log("Output 3",item);
}
coding.forEach(print);


coding.forEach ( (item, index, arr) => {
    console.log(item, index, arr)
})
*/

const myCoding = [
    {
        name : 'javascript',
        filename : 'js'
    },
    {
        name : 'java',
        filename : 'java'
    },
    {
        name : 'python',
        filename : 'py'
    }
]

myCoding.forEach( (item) => {
    console.log(item.name);
})