const removeFromArray = function(arr, ...a) {
    let arrayCount = {};
    let merged = arr.concat(a);
    
    for(const item of merged) {
        arrayCount[item] = (arrayCount[item] || 0) + 1;
    }
    
    let arrayMerged = merged.filter(item => arrayCount[item] === 1);
    
    return arrayMerged;
};


/* 

1. Merge array and items to be removed
2. Match similar items 
3. Remove similar items
4. Return to array

*/

// Do not edit below this line
module.exports = removeFromArray;
