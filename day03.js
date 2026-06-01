// let a = 20
// let b = 10

// let c = 5;

// console.log(a > b)

// console.log((a > b) && (c > a))

// console.log((a > b) || (a < b))

// console.log((a > b) && (a < c))

// function myfun(msg, n) {  // parameter
//     console.log(msg*n);
//     console.log('we are learing js');
// }

// myfun('i love js', 100) //argrument

// NAN -> not a number


// function sum(n1, n2) {
//   // loacal variable -> scope // function only
//   su = n1 + n2;
//   // console.log("before return")
//   console.log(n1);
//   return su;
//   // after return code never execute

//   console.log("after return");
// }

// let value = sum(2,3)
// console.log(n1) //day03.js:38 Uncaught ReferenceError: n1 is not defined
// console.log(value)

// function param -> they are local variable of function and they have block scope

// arrow function

// function add(a,b){
//     return a+b

// }

// const arrowadd = (a,b) => {
//     console.log(a+b);
// }

// function mul(a, b){
//     return a*b
// }

// let arrrowfun = (a, b) => {
//     return a * b;
// }

// function variable const arrmul id variable ans = () => and store value inside func
// used for smaller cal
// let arrmul = (a, b) => {
//     console.log(a * b)
// }

// arrmul = 5

 const printhello = () => console.log("hello");


 function countvowels(str) {
   let count = 0;

   // aditi, count = 0
   for (const char of str) {
     if (
       char === "a" ||
       char === "e" ||
       char === "i" ||
       char === "o" ||
       char === "u" ||
       char === 'A' ||
       char === 'E' ||
       char === 'I' ||
       char === 'o' ||
       char === 'U'
     ) {
       count++;
     }
   }
   return count
 }

//countvowels("aditi")



// const countvov = (str) => {
//     let vov = "";

//   // aditi, count = 0
//   for (const char of str) {
//     if (
//       char === "a" ||
//       char === "e" ||
//       char === "i" ||
//       char === "o" ||
//       char === "u" ||
//       char === 'A' ||
//       char === 'E' ||
//       char === 'I' ||
//       char === 'o' ||
//       char === 'U'
//     ) {
//         vov += char;
//     }
//   }
//   return vov;

// } 


// console.log(countvov("aditi"));


// object store data in key value pair
//   let student variable = assign value 

// let student = {
//     name : "aditi",
//     assigmentscore : 20,
//     quizescore: 10,
//     minipassingscore :5

// };


// console.log(student.assigmentscore > student.quizescore)

// console.log((student.assigmentscore > student.quizescore ) 
//     && (student.minipassingscore > student.assigmentscore ))

// console.log((student.assigmentscore > student.quizescore) 
//     || (student.assigmentscore < student.quizescore))



function checkscore(assigmentscore, quizescore) {
    if(assigmentscore > quizescore){
        console.log('pass')

    }else{
        console.log('fail')

    }
}

// console.log(checkscore(20,10))


let a = 20
let b = 10
let c = 5

// console.log(a < b)
// console.log(!(a < b))
// console.log((a> b) && (c > b))

let x = '5'
let y=  5
// console.log('x == y: ',x == y)

// console.log('x == y :', x === y)


let marks = 71;

// let grade = marks > 90 ? 'A' : 'B'
let grade = marks > 90 ? 'A' : marks > 80 ? 'B' : marks > 70 ? 'C' : 'D'


// console.log(grade)


let arr1 = [1,2,3]
// console.log(arr1)

let arr2 = [4,5,6]
// console.log(arr2)

let merge = [arr1, arr2]

 console.log(merge)


// spread operation with array use to split values seperately

// console.log("spread", ...arr1)

// console.log("spread", ...arr2)

// console.log(...arr1, ...arr2)

let spreadmerage = [...arr1, ...arr2]
// console.log(spreadmerage)


let person = {
    'id': 101,
    'name': 'ram',
    'age': 22
}

console.log(person)
person={...person, age : 23}
console.log(person)

person = {...person, city : 'pandharpur'}
person = {...person, phone_number : 9876543210}
console.log(person)
