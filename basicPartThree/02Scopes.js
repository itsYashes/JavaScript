let a = 300

if (true) {
    let a = 10
    const b = 20
    // console.log("Inner: ", a);   
}

// console.log(a);
// console.log(b);


function one() {
    const username = "Yashas"

    function two() {
        const website = "Youtube"
        console.log(username);
    }
    // console.log(website);

    two()
    
}

// one()

if (true) {
    const username = "Yashas"
    if (username === "Yashas") {
        const website = ' youtube'
        // console.log(username + website);        
    }
    // console.log(website);
    
}
// console.log(username);

// +++++++++++++++++++ Interesting ++++++++++++++++++
console.log(addone(5));

function addone(num) {
    return num + 1
}

console.log(addTwo(3));


const addTwo = function (num) {
    return num + 2
}
