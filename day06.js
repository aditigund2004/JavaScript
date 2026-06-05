console.log("hello!!!!")

// control statements -> statments whixh are used to controll the flow of the exacution of the programm

//  conditional statements -> if, if-else, else-if ladder, nested if, switch case
//  looping statments -> for , for-in -used for (indexing), for-of(values), while, do-while, foreach
//  Jumping statements -> continue, break, return



// const num = 7
// if(num %2==0){
//     console.log("even")
// }
// else{
//     console.log("odd")
// }


// const mark = 75

// if (mark >= 75) {
//     console.log("eligible for scholership")
    
// } else {
//     console.log("not eligible for scholership")
    
// }


// let num =300

// if(num > 50) {
//     console.log("greter than 50")
// }




// let age = "12";

// if(age > 0 && age < 110){
//     if (age >= 18) {
//     console.log("eligible for voting")
    
//     } else {
//         console.log("underage.. not eligible for voting")
            
//     }
// }else{
//     if(age == 0){
//         console.log("age zero is not valid")

//     } else if(age <= 0){
//         console.log("Invalid age.... age is negative")

//     }else{
//         console.log("invalid age.... age is must be under 110 or invalid number")

//     }
    
// }



// function checkMobile(){
//     let mob = document.getElementById("mob").value;

//     let msg = document.getElementById('msg');

//     let mobileRegex = /^[6-9]\d{9}$/.test(mob);

//     if (mobileRegex ) {
//         msg.innerHTML = "valid mobile number"
        
//     } else {
//         msg.innerHTML = "invalid mobile nummber and  must start 6-9 and 20 digits"
        
//     }
// }


// swith case -> follows -> ===
// exact matching values
// in if elase -. if we use number as string then it will accept and resolve 
// but in the switch case it not allowed
// let day = "6"


// let day = 1
// switch (day) {
//     case 1:
//         console.log("Sunday")
//         break;
//     case 2:
//         console.log("Moday")
//         break;
//     case 3:
//         console.log("Tuesday")
//         break;
//     case 4:
//         console.log("Wednesday")
//         break;

//     default:
//         console.log("not a valid day")
//         break;
// }



// looping statements 

let arr  = ["mango", "orange", "banana", 5, "grapes", "kiwi"];

let fts = document.getElementById("fruits")

fts.innerHTML = arr;

console.log("normal for loop")
for (i = 0; i < arr.length; i++){
    // console.log(arr[i])
}



console.log("indexing for loop -> for-in loop")
for (let i in arr){
    // console.log(arr[i])
}



console.log("indexing for loop -> for-of loop")
for (let v of arr){
    // console.log(v);
}



console.log("access by indexing")
for (let i in arr){
    if (i == 3) {
        continue;
    } else {
        // fts.innerHTML += arr[i] + '<br>';
        // console.log(arr[i]);
    }   
}



console.log("access by using values -> for-of loop")
for (let v of arr){

    if (v == 5 || v=='grapes') {
        
    } else {
        // fts.innerHTML = v;
        fts.innerHTML += v + '<br>';

        console.log(v);   
    }
}




// while
// if number is less than 40 then print the number like 32 + 6 = 38 
// and still 38 + 6 = 44 then break the loop and print the digit

let digit = 32

while(digit < 40){
    digit +=6
    console.log(digit)
}
console.log(digit)



let num = 5;

while(num <= 20){
    num += 4;
    console.log(num);
}
console.log("Final:", num);

// 21
// Final: 21

console.log("--------------------")
let x = 10;

while(x > 0){
    console.log(x);
    x -= 3;
}

console.log(x);

// op
//  10
//  7
//  4
//  1
//  -2
console.log("------------")

let a = 2;

for(let i = 1; i <= 4; i++){
    a *= 2;
    console.log(a);
}

console.log("Result:", a);

// count of number must be 4 and then multiply it self
// 4
// 8
// 16
// 32
// Result: 32

let count = 1;

for(let i = 0; i < 5; i++){
    count += i;
}

console.log(count);

/*
i = 0: count becomes 1 + 0 = 1
i = 1: count becomes 1 + 1 = 2
i = 2: count becomes 2 + 2 = 4
i = 3: count becomes 4 + 3 = 7
i = 4: count becomes 7 + 4 = 11
*/

/*  Shift + Alt + A -> multi line comment */



let n = 15

while(n > 5){
    n -=3
}
console.log(n)



let u = 1

while(u < 20){
    u *= 2

}
console.log(u)



/* 
Initial State: \(u = 1\)
Iteration 1: \(1 < 20\) (True). \(u\) becomes \(1 \times 2 = 2\).
Iteration 2: \(2 < 20\) (True). \(u\) becomes \(2 \times 2 = 4\).
Iteration 3: \(4 < 20\) (True). \(u\) becomes \(4 \times 2 = 8\).
Iteration 4: \(8 < 20\) (True). \(u\) becomes \(8 \times 2 = 16\).
Iteration 5: \(16 < 20\) (True). \(u\) becomes \(16 \times 2 = 32\).
Iteration 6: \(32 < 20\) (False). The loop stops.


ex
1 X 2 = 2
2 X 2 = 4
4 X 2 = 8
8 X 2 = 16
16 X 2 = 32
*/