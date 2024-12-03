// IF
// <, >, <=, >=, ==, !=, ===, !==

const isUserleggedIn = true
const temperature = 41

// if (temperature < 40) {
//     console.log("Less than 40");
// } else {
//     console.log("Temperatur is greater than 40");
// }
// console.log("Executed");

const score = 200

// if (score > 100) {
//     let power = "Fly"
//     console.log(`User power: ${power}`);
// }
// console.log(`User power: ${power}`);

// Shorthand
// const balance = 1000
// if (balance > 500) console.log("Test"),
// console.log("Test2");

// if (balance < 500) {
//     console.log("Less than 500");
// } else if (balance < 750) {
//     console.log("Less than 750");
// } else if (balance < 900) {
//     console.log("Less than 900");
// } else {
//     console.log("Less than 1200");
// }

const userLoggedin = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedin && debitCard) {
    console.log("Allow to buy courses");    
}

if (loggedInFromEmail || loggedInFromGoogle ) {
    console.log("User logged in");
}