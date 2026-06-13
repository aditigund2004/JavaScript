// var was the original way to declare variables but has confusing behaviors.
var a = 9;  // declaration 

a = 10 // re-assign 

// a = 'ram'

console.log(a);

// var var = 'hello'

// Use let for variables whose value you expect to change (e.g., counters in a loop or toggle states).
let b = 10;

b = 5

console.log(b)

// Use const for values that should not be reassigned after they are first set.
const c = 10;

// const c = 1

console.log(c)





// hoisting

console.log(a) //undefined

greet()
function greet(){
    console.log('Hello')

} //Hello

// let it will deprecate but goes in the Temporary Dead Zone if use and assign 
// beauce declaration can be hoist and initialization cannot be hoist

// let a = 10 // if use let or const -1. Cannot access 'a' before initialization
var a = 10
console.log(a) //10

// function expression and class expresion are not also hoisted