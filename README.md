


    - 1️⃣ What is the difference between var, let, and const?
    - 2️⃣ What is the spread operator (...)?
    - 3️⃣ What is the difference between map(), filter(), and forEach()?
    - 4️⃣ What is an arrow function?
    - 5️⃣ What are template literals


    Answer 1:

    var, let, and const are used to declare variables in JavaScript, but they differ in scope, reassignment, and redeclaration.

var:

Function scoped

Can be redeclared and reassigned

Hoisted and initialized with undefined

let:

Block scoped

Cannot be redeclared in the same scope

Can be reassigned

const:

Block scoped

Cannot be redeclared or reassigned

Must be initialized when declared.

note:👉 In modern JavaScript, developers usually prefer const and let instead of var.


Answer 2:

The spread operator (...) is used to expand or spread elements of an array or object into individual elements.

It is commonly used to:

Copy arrays,

Merge arrays or objects,

Pass multiple arguments to functions.

Answer 3:

These are array methods used for iterating over arrays, but they serve different purposes.

map()

Used to transform each element

Returns a new array

filter()

Used to select elements based on a condition

Returns a new array

forEach()

Used to execute a function for each element

Does not return a new array.

Example:

const numbers = [1,2,3,4];

const doubled = numbers.map(n => n * 2);
const even = numbers.filter(n => n % 2 === 0);

numbers.forEach(n => console.log(n));