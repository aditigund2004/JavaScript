console.log("hello")

//  for -> is an iterating object (elements) it does not return anything

// arr = [1,2,3]
// for(let v of arr){
//     console.log(v)
// }

//   to return a new array they use
// map -> 
/* 
Creates a new array by applying a function to every element of the original array. 
The new array is always the same length as the original.
*/

/* 
(method) Array<number>.map<number>(callbackfn: (value: number, index: number, array: number[]) => number, thisArg?: any): number[]
Calls a defined callback function on each element of an array, and returns an array that contains the results.
*/
let arr = [1,2,3,4]
for (let v of arr){
    // console.log(v);
}
/* 
op ->
1
2
3
4
 */

let nums = arr.map((n) => n)

// console.log(nums)
// op [1, 2, 3, 4]


// let nums = arr.map((n) => n+1)
// op  [2, 3, 4, 5]


let arr2 = [2,3,4]
// let sum = []
// op -> 234
let sum =0 
// op -> 9
for (let v of arr2){
    sum +=v;
}
// console.log(sum)
// op -> 9


let arr3 = [2,3,4]
let sum1 = []
for (let v of arr3){
    sum1.push(v+2)
}
// console.log(sum1)
// op -> [4, 5, 6]


let sum2 = arr3.map((s) => s+2)
// console.log(sum2)
//  [4, 5, 6]




// filter->
/* 
Creates a new array containing only the elements that pass a specific condition. 
The new array can be shorter than the original.
 */
console.log('-------------')
let arr4 = [1,2,3,4,5,6,7,8,9,10]

let gt= []
for(let v of arr4){
    if (v >6) {
        gt.push(v)
        
    }
}
// console.log(gt)
// [7, 8, 9, 10]
console.log('------ by using filter-------')

let gts = arr4.filter((gt1) => gt1 > 6)
console.log(gts)
// [7, 8, 9, 10]

console.log('------ Square-------')

let sq = arr.map((sq1) => sq1*sq1)
console.log(sq)
// [1, 4, 9, 16]


const employees = [
  {
    id: 101,
    name: "Aditi",
    role: "Software Engineer",
    salary: 60000
  },
  {
    id: 102,
    name: "Rahul",
    role: "Software Engineer",
    salary: 55000
  },
  {
    id: 103,
    name: "Priya",
    role: "Backend Developer",
    salary: 65000
  },
  {
    id: 104,
    name: "Amit",
    role: "Python",
    salary: 50000
  },
  {
    id: 105,
    name: "Sneha",
    role: "Backend Developer",
    salary: 70000
  }
];

 let find = employees.filter((e) => e.role=== "Software Engineer")
console.log(find)

/* 
(2) [{…}, {…}]
0
{id: 101, name: 'Aditi', role: 'Software Engineer', salary: 60000}
1
{id: 102, name: 'Rahul', role: 'Software Engineer', salary: 55000}
length
2
[[Prototype]]
: 
Array(0)

*/

// reduce
/*Executes a function on each element to combine them into a single final 
value (like a number, string, object, or total sum). 
 */

/* 
callbackfn(previousValue: number, currentValue: number, 
currentIndex: number, array: number[]): number
*/

// console.log('------ reduce-------')
let arr6 = [2,3,4,5,6]

let rd = arr6.reduce((sum, num) =>sum + num, 0)
// console.log(rd)
// 20


let sm = 0
for(let v of arr6){
    sm +=v
}
// console.log(sm)
// 20




// practice
let marks = [45,60,78,90,55]

let mi = marks.map((m) => m+5)
// console.log(mi)



let price = [1000, 2000, 1500, 500]
// prices = value
// dis = 10
// di = prices*dis
// p = dis - prices

let newprice = price.map((pri) => pri -pri*(10/100))
// console.log(newprice)

// upper case
let names = ['ram', 'sham','radha', 'aadi']
let newname = names.map((newn) => newn.toUpperCase())
// console.log(newname)
// ['RAM', 'SHAM', 'RADHA', 'AADI']


// greter than 18
let ag = [12,18,25,15,30,16]
let ags = ag.filter((ad_ag) => ad_ag >= 18)
// console.log(ags)
// [18, 25, 30]


// squre everry number
let sq1 = [2,3,4,5];
let new_sq1 = sq1.map((s) => s*s)
// console.log(new_sq1)
// [4, 9, 16, 25]


// add Mr/Ms prefix

let students = ["Ram", "Mansi", "Revati"];
let new_names = students.map(name => `student: ${name}`);
console.log(new_names);
// ['student: Ram', 'student: Mansi', 'student: Revati']

// even numbers
let numberss = [1, 2, 3, 4, 5, 6, 7, 8];
let even_num = numberss.filter((en) => en % 2 ===0)
console.log(even_num)


// expensive product
let prices = [500, 1200, 800, 2500, 600];
let expensive_product = price.filter((ep) => ep > 1000)
console.log(expensive_product)


// long names
let nm = ["Raj", "Tejas", "Amit", "Pratik", "Om"];
let long_names = nm.filter((ln)=> ln.length > 4)
console.log(long_names)

// pass stududents
let mark = [35, 80, 25, 90, 40, 28];
let pass_stud = mark.filter((ps) => ps>40)
console.log(pass_stud)


//  get all employee names
let get_names = employees.map((nam) => nam.name) 
console.log(get_names)


// increase salary 
let increase_salary =employees.map((inc_sa) => inc_sa.salary+5000)
console.log(increase_salary)

// get emp roles
let get_emp_role = employees.map((rol) => rol.role)
console.log(get_emp_role)


// get by role
let get_role = employees.filter((ro) => ro.role='Software Engineer')
console.log(get_role)

// greter than salry
let less_salary = employees.filter((less_sala) => less_sala.salary > 50000)
console.log(less_salary)