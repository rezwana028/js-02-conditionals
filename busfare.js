/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

let age = 98;
let isStudent = true;
let fee = 800;

if (age < 10) {
    console.log("Children: free");

}
else if (age >= 60) {
    discountFee = fee * 15 / 100;
    payableFee = fee - discountFee;
    console.log(payableFee);


}
else if (isStudent) {
    discountFee = fee * 50 / 100;
    payableFee = fee - discountFee;
    console.log(payableFee);

}
else {
    console.log("regular ticket fare is 800 tk");

}
