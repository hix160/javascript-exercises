const removeFromArray = function(array, ...args) {
    var myArray = [];
    for(i=0; i<array.length; i++) {
        if (!args.includes(array[i])) {
            myArray.push(array[i]);
        }
    }
    return myArray;
};

// Do not edit below this line
module.exports = removeFromArray;

//removeFromArray([1,2,3], 3);
