const myNums = [1, 2, 3]

// const mytotal = myNums.reduce(function (acc, curVal){
//     console.log(`acc ${acc} and curVal ${curVal}`);
    
//     return acc + curVal
// }, 0 )

const mytotal = myNums.reduce( (acc, curVal) => acc + curVal, 0)

// console.log(mytotal);

const shoppingCart = [
    {
        itemName: "js",
        price: 299
    },
    {
        itemName: "py",
        price: 999
    },
    {
        itemName: "mobile DEv",
        price: 5000
    },
    {
        itemName: "data science",
        price: 1299
    },
]

const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0 )
console.log(priceToPay);
