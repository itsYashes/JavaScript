// console.log(true);

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["Iron Man", "Hulk"]

const myArr2 = new Array(1, 2 ,3)
// myArr2.push(5)
// myArr2.push(8)
// myArr2.pop()

// myArr.unshift(12)
// myArr.shift()
// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

const newArr = myArr.join()
// console.log(myArr);
// console.log(typeof newArr);

// Slice, Splice

console.log("A ", myArr);

const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1,3)
console.log("C ", myArr);
console.log(myn2);