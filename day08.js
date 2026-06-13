// console.log("Hello!!!!!!")

// dialog boxes -> pop up messages
// alert nothing returns only -> okay

// let aler = alert("Hello it will only display msg or Ok")
// console.log(aler)

// undefined -> variable is present but data is not assigend




// function sum (){
//     return 5;
// }
// let b = sum();
// console.log(b)



// let b;
// console.log(b)
//  ouptup -> undefined



// confirm ->  return boolean (Okay -> true | cancle -> false)
/* 
function confirm(message?: string | undefined): boolean
window.confirm() instructs the browser to display a dialog with an optional message, 
and to wait until the user either confirms or cancels the dialog.
*/


// let cfrm = confirm("are you sure?  you want to delete")
// console.log(cfrm)

// windo.open and windo.location -> study these point




// prompt-> accept input from user
// let pmt = prompt("Enter your Name....")
// console.log(pmt)

// if (pmt !== 'cmgogocmgogo') {
//     window.location.href = 'wrong.htm'
    
// }
// cancle -> null
// enter nothing -> empty sapce




// ******************Exactly once. -> settimeout
// setTimeout -> execute only once after given time (exwcute block of code after given time)
/* 
The setTimeout method executes a callback function exactly once after a specified 
number of milliseconds.
*/


// call back function
// console.log("start...")

// setTimeout(() => {
//     console.log("process...")
// }, 2000);

// console.log("end..")



// ************** Execute Repeatedly.
// settimeout pass function or make setTimeout itsef a function (on the given time it execute the block of code agina and agian)
const greet = () => {
    count++
    console.log("Hello All...",count)
}
// setTimeout(greet, 3000);



// setInterval -> execute again and agina after the given time
/*
The setInterval method repeatedly triggers a callback function, waiting for the
designated interval between each launch. 
 */


let count = 0

setInterval(() => {
    count++;
    // console.log("hello all..", count)
    
}, 1000);



// setInterval(greet, 2000);

/* 
Hoisting is a JavaScript mechanism where variable, function, and class declarations 
are conceptually moved to the top of their containing scope during the compilation phase, 
before the code actually executes.
*/


/* 
1. Function Hoisting (Fully Hoisted) -> Traditional function declarations are fully 
hoisted. This means the JavaScript engine saves the entire function body to memory 
before running the script, allowing you to call the function before it is written in the code.
*/