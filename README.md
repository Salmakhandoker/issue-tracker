


    - 1️⃣ What is the difference between var, let, and const?
    - 2️⃣ What is the spread operator (...)?
    - 3️⃣ What is the difference between map(), filter(), and forEach()?
    - 4️⃣ What is an arrow function?
    - 5️⃣ What are template literals?

1️⃣ Difference between var, let, and const

Answer:

var, let, and const are used to declare variables in JavaScript.

var → function scoped, can be redeclared and reassigned

let → block scoped, cannot be redeclared but can be reassigned

const → block scoped, cannot be redeclared or reassigned

Example:

let age = 20;
age = 21; // allowed

const name = "John";
// name = "Mike";  not allowed.


2️⃣ What is the Spread Operator (...)

Answer:

The spread operator expands elements of an array or object.

It is commonly used to copy or merge arrays/objects.

Example:

const arr1 = [1,2,3];
const arr2 = [...arr1,4];

console.log(arr2); 
// [1,2,3,4]


3️⃣ Difference between map(), filter(), and forEach()

Answer:

These are array methods used for iteration.

map() → transforms elements and returns a new array

filter() → returns elements that match a condition

forEach() → runs a function for each element but returns nothing

Example:

const nums = [1,2,3,4];

nums.map(n => n*2);      // [2,4,6,8]

nums.filter(n => n>2);   // [3,4]

nums.forEach(n => console.log(n));


4️⃣ What is an Arrow Function?

Answer:

An arrow function is a shorter way to write functions in JavaScript.

Example:

const add = (a,b) => a + b;

console.log(add(2,3)); 


5️⃣ What are Template Literals?

Answer:

Template literals are strings written using backticks ( ) that allow variable interpolation.

Example:

const name = "John";

console.log(`Hello ${name}`);

Output:

Hello John