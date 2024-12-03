const user = {
    username: "Yashas",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.username}, welcome to webstie`);   
        // console.log(this);
        
    }
}

// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()
// console.log(this);

// function chai() {
//     let username = "Yashas"
//     console.log(this.username);
// }
// chai()

// const chai = function () {
//     let username = "Yashas"
//     console.log(this.username);
// }
// chai()

// const chai = () => {
//     let username = "Yashas"
//     console.log(this);   
// }
// chai()

// Explicit
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addTwo(5, 5));

// implicit
// const addTwo = (num1, num2) => num1 + num2
// const addTwo = (num1, num2) => (num1 + num2)
const addTwo = (num1, num2) => ({username: "Yashas"})
console.log(addTwo(5, 6));

const myArr = [2, 3, 4, 45, 7, 8]

myArr.forEach(() => {})