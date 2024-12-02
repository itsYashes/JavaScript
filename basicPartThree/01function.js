// function sayMyname(params) {
//     console.log("Y");
//     console.log("A");
//     console.log("S");
//     console.log("H");
//     console.log("A");
//     console.log("S");
// }

// sayMyname()

// function addTwoNumbers(number1, number2) {
//     console.log(number1 + number2);
// }

// const result = addTwoNumbers(3, 4)

// console.log("Result: ", result);

function addTwoNumbers(number1, number2) {
    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 4)

// console.log("Result: ", result);

function loginUserMessage(userName = "Sam") {
    if (!userName) {
        console.log("Please entry userame");
        return
    }
    return `${userName} just logged in`
}

// console.log(loginUserMessage("Yashas"))
console.log(loginUserMessage("Yash"))