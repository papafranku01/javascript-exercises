const sumAll = function(a, b) {
    
    let sum = 0;
    
    if (!Number.isInteger(a) || !Number.isInteger(b) || a < 0 || b < 0) {
        return "ERROR";
    }

    const start = Math.min(a,b);
    const end = Math.max(a,b);

    for(let i = start; i <= end; i++) {
        sum += i;
    } 

    return sum;
};

/* 
1. Check numbers in between by iteration
3. Check if negative
2. Sum numbers in start, between, and end


*/

// Do not edit below this line
module.exports = sumAll;
