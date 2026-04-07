// function in javascript
function add(a, b) {return a + b;}  // function declaration

console.log(add(2, 3))   // 5 // 

function multiply(p,q){ // function expression
    return p*q
}
console.log(multiply(4,5)) // 20    
const subtract = (x,y) => x-y // arrow function
console.log(subtract(10, 4)) // 6   

const hello = () => "Hello world!" // arrow function with implicit return
console.log(hello()) // "Hello world!"

const printMyname = name => "My name is " + name  // arrow function with single parameter and implicit return
console.log(printMyname("Ankit"))

const square = function(n) { return n*n} // function expression assigned to a variable
console.log(square(6))