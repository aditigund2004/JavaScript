// variable

// var a = 10 //declare allow
// a = 5      // re assign allow
// var a = 10 //re declare allow
// console.log(a)


// let b = 10 //declare allow
// b = 6      // re assign allow
// let b = 0  // re-declare is not allwed
//Identifier 'b' has already been declared
// console.log(b)


// const c = 10 ////declare allow
// c = 3  //re declare allow not allwed
// var c = 5 //re assign not allow
// console.log(c)




// functiton


// console.log("hello")

// function add(a, b){
//     console.log("a and b:" ,a + b);
// } 

// add(20,10)


// let fundemo = (a, b) => {
//     console.log('a * b :', a * b)
// }
// fundemo(10,5)



// function mul(a, b){
//     console.log("a and b:", a * b)
// } 

// mul(5,15)








// let a = 10

// let b = 10.00

// let c = 101.1111111

// let d = 1111111111111111111

// let e = '@'

// let f = false

// let g = null

// let h 


// console.log('a = ',typeof a)
// console.log('b = ',typeof b)
// console.log('c = ',typeof c)
// console.log(typeof d)
// console.log(typeof e)
// console.log(typeof f)
// console.log(typeof g)
// console.log(typeof h)


function greet(){
    console.log('hello')
}

// greet()


function gret(name){
    console.log('hello : ' + name)
}

// gret('ram')
// gret(ram) //Uncaught ReferenceError: ram is not defined at day02.js:39:6


function add(a, b){
    console.log('sum :' , a + b)

}
// add(10,10)
// add('10',10)


function mul(a, b){
    console.log('mul :', a * b)
}

// mul(4,2)

// mul('10',10)



// let division = (x) =>{
//     console.log('x', x / x)
// }

// division(10, 2)



// task 2
function greet1(name){

    console.log("welcome", name, "to javascript bootcamp")
    
}

greet1('ram')
// greet1('guest')



const add1 = (a, b) => {
    return a + b;
    console.log('sum', a, b)
}

// add1(10, 4)


// let age = 22
// let price = 50.0
// let distance =20222
// let symbol = '*'
// let status = false
// let data=null



// function
// 'abc'.toUpperCase()

// [1,2,3].push(4);
// console.log('hello')

// function myfun(){
//     console.log('hello');
//     console.log('we are learing js');
// }

// myfun()