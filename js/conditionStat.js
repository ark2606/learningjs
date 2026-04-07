let age = 35;
if (age >= 18) {
    console.log("Eligible to vote")
} else {
    console.log.apply("Not eligible to vote")
} 
let marks = 75;
if (marks >= 90) {
  console.log("Grade: A");
} else if (marks >= 75) {
  console.log("Grade: B");  // runs
} else if (marks >= 60) {
  console.log("Grade: C");
} else {
  console.log("Grade: F");
}
 
// ===== if else if with multiple conditions =====
let x = 25;
if (x < 0) {
  console.log("Negative");
} else if (x === 0) {
  console.log("Zero");
} else if (x > 0 && x <= 10) {
  console.log("Between 1 and 10");
} else if (x > 10 && x <= 50) {
  console.log("Between 11 and 50");  // runs
} else {
  console.log("Greater than 50");
} 

// ===== Switch with Grade =====
let grade = "B";
switch (grade) {
  case "A":
    console.log("Excellent");
    break;
  case "B":
    console.log("Good");  // runs
    break;
  case "C":
    console.log("Average");
    break;
  case "F":
    console.log("Fail");
    break;
  default:
    console.log("Invalid grade");
}
