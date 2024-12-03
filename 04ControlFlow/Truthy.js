const userEmail = []

// if (userEmail) {
//     console.log("Got user Email");
// } else {
//     console.log("Dont have user email");
// }

// falsey values
// false, 0, -0, BigInt 0n, "", '', null, undefined, NaN

// Truthy values
// "0", 'false', " ", [], {}, function(){},

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

const empObj = {}
// if (Object.keys(empObj).length === 0) {
//     console.log("Object is empty");
// }

// Nullish Coalescing Operator (??): null & undefined
let val
// val = 5 ?? 10
// val = null ?? 10
// val = undefined ?? 15
val = null ?? 10 ?? 15
// console.log(val);

// Terniary operator
// condition ? true : false
const iceTeaprice = 100
iceTeaprice <= 80 ? console.log("Less than 80") : console.log("More than 80");

