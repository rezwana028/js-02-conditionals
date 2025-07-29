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




// যদি age ≥ 18 হয়
// আবার চেক করো সে ID সাথে এনেছে কিনা
// ID থাকলে → "You can enter"
// না থাকলে → "ID required"

// যদি age < 18 → "Under age"

let age = 20;
let hasID = true;

if (age >= 18) {

    if (hasID == true) {
        console.log("You Can Enter");

    }
    else {
        console.log("ID required");

    }

}
else {
    console.log("Under Age");

}
