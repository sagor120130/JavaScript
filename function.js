// function dubleIt(num) {
//     let result = num * 2;
//     console.log(result);
// }
// dubleIt(30);


// function dubleIt(num) {
//     let result = num * 2;
//     return result;
// }
// let first = dubleIt (5);
// let secnd = dubleIt (50);
// let total = first + secnd;
// console.log(total);


// function inchToFeet(inch) {
//     let feet = inch/12;
//     return feet;
// }
// let nanafeet = inchToFeet(156);
// console.log(nanafeet);

// factorial Function

function factorial(n) {
    let factorial = 1;
    for (let i = 1; i <= n; i++) {
        factorial = factorial * i;
    }
    return factorial;
}
let result = factorial(6)
console.log(result);