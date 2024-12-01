// console.log("Its working");

// Stack (Primitive{Copy}) and heap (Non-primitive{Reference})

let myYoutubename = "Yashas Ravindra"

let anotherName = myYoutubename;

anotherName = "Yashes ravindra"

// console.log(anotherName);
// console.log(myYoutubename);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "Hithesh@gmail.com"

console.log(userTwo.email);
console.log(userOne.email);