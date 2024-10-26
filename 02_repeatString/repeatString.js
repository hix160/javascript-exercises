const repeatString = function(givenString, times) {
    let sumString = "";

    if (times < 0) {
        return "ERROR";
    }

    for (i=0; i < times; i++) {
        sumString = sumString + givenString;
    }
    return sumString;
};

// Do not edit below this line
module.exports = repeatString;
