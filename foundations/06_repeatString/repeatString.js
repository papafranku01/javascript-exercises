const repeatString = function(str, n) {
    if (n < 0) return 'ERROR';
    let word = "";
    for(let i = 0; i < n; i++) {
        word+=str;
    }
    return word;
};

// Do not edit below this line
module.exports = repeatString;
