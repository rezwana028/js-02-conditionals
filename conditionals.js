// if,else er practice

// 1. যদি marks 80 বা তার বেশি হয় → "A+" দেখাও না হলে → "ভালো চেষ্টা" দেখাও

var marks = 75;
if (marks >= 80) {
    console.log("A+");

} else {
    console.log("Good Try");

}


// যদি marks ≥ 80 → "A+"
// যদি marks ≥ 70 → "A"
// যদি marks ≥ 60 → "A-"
// না হলে → "Fail"

var score = 65;

if (score >= 80) {
    console.log("A+");

} else if (score >= 70) {
    console.log("A");

} else if (score >= 60) {
    console.log("A-");


} else {
    console.log("Fail");

}


// 👉 number যদি 2 দিয়ে ভাগ করলে ভাগশেষ থাকে 0 → Even
// 👉 না হলে → Odd

// ternary operator দিয়ে লেখো

let number = 10;
let result = (number % 2 === 0) ? "Even" : "Odd"
console.log(result);



