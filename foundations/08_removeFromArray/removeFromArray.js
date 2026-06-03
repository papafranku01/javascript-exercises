const removeFromArray = function(arr, ...a) {
    let arrayCount = {};
    const itemBasis = typeof arr[0];
    const validItems = a.filter(items => typeof item === itemBasis);
    let merged = arr.concat(validItems);

    for(const item of merged) {
        arrayCount[item] = (arrayCount[item] || 0) + 1; // count duplicates
    }
    
    let arrayMerged = merged.filter(item => arrayCount[item] === 1); // if duplicate is found, filter all instances duplicated value
    
    return arrayMerged;
};


/* 

1. Merge paramaters and check for non same-type values 
2. Filter non same-type values
2. Check how many duplicates
3. Filter similar items
4. Merge to array

*/

// Do not edit below this line
module.exports = removeFromArray;
