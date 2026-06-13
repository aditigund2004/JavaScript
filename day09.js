console.log("Hello!!!!!!!!");

// function declaration
function greet(name){
    console.log("my name is : "+ name);
}

console.log(greet("aditi"))

/* 
Hoisted (can be called before its definition).
Named function.
Easy to read and maintain.
*/


sayHello(); //undefined

function sayHello(){
    console.log("hello");
}
// hello



// function expression -> function store inside variable
const hello = function(name){
    return "hello: " + name;

}
console.log(hello('aditi'))
// hello: aditi


/*
Not hoisted like function declarations.
Can be assigned to variables.
Useful for passing functions around. 
 */

const add = function(a, b){
    return a + b
}
console.log(add(10,20))
// 30



// arrow function (ES6)

const welcome = (age) => {
    return "age: " + 18
};
console.log(welcome(22))
// age: 18

// If there is only one return statement:
const greett = name => "Hello " + name;

console.log(greett('ram'))
// Hello ram

const square = num => num * num;
console.log(square(5)); // 25

/* 
Shorter syntax.
Does not create its own this.
Commonly used in modern JavaScript.
*/


// Anonymous Function -> A function without a name.

const hellofun = function() {
    console.log("Hello");
};
console.log(hellofun())
// Runs a function once after a specified delay. -> Runs only one time
setTimeout(function() {
    console.log("Executed after 2 seconds");
}, 2000);