// for of
// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]
for (const num of arr) {
    // console.log(num);
    
}

const greeting = "Hello World!"
for (const greet of greeting) {
    if (greet == " ") {
        // console.log("Each char is : - ");
        continue
    }
    // console.log(`Each char is : ${greet}`);    
}

// Map
const map = new Map()
map.set('IN', "India")
map.set('IN', "India")
map.set('US', "United States of America")
map.set('FR', "France")

// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ' : ', value);    
}

const myObj = {
    game1: 'NFS',
    game2: 'Spiderman'
}
for (const [key, value] of myObj) {
    console.log(key, ' : ', value);    
}