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
// console.log(loginUserMessage("Yash"))

function calculateCartPrice(...num1) {
    return num1
}
// console.log(calculateCartPrice(200, 300, 500, 2000));

const user = {
    username: "Hithesh",
    price: 99
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "Yashas",
    price: 199
})

const myArr = [200, 400, 100, 600]
function returnSecondValue(getArr) {
    return getArr[1]
}
// console.log(returnSecondValue(myArr));
console.log(returnSecondValue([200, 400, 100, 600]));
