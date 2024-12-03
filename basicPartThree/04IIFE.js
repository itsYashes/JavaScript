// Immediately Invoked Function Expressions (IIFE)

(function chai () { 
    //Named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED 2 ${name}`);
} )('Yashas')