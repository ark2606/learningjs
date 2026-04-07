let firstname = 'ankita'
let lastname = ' raj'
// console.log(firstname+lastname) // concatenation of string 

let fullName = `${firstname}${lastname}` // template literal
// console.log(fullName) 

// console.log(lastname.length) // length of string
// console.log(firstname.toUpperCase()) // convert to uppercase
// console.log(lastname.toLowerCase()) // convert to lowercase
// console.log(firstname.charAt(0)) // get character at index 0
// console.log(lastname.indexOf('a')) // get index of first occurrence of 'a'
// console.log(firstname.slice(1, 4)) // get substring from index 1 to 3
// console.log(lastname.trim()) // remove whitespace from both ends
console.log(firstname.slice(0)) // get substring from index 0 to end of string
console.log(lastname.substring(1,4)) // console.log(firstname.replace('a', 'A')) // replace first occurrence of 'a'
console.log(firstname.replace('a', 'A'))    // replace first occurrence of 'a' with 'A'
console.log(firstname.replace(/a/g, 'A')) // replace all occurrences of 'a' with 'A'