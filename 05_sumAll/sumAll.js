const sumAll = function(number1, number2) {

    if (!isInteger(number1) || !isInteger(number2)) return "ERROR";

    var maxVal = 0;
    var index = 0;
    var totalSum = 0;
    
    if (number1 > number2) {
        maxVal = number1;
        index = number2;
    } 
    else {
        maxVal = number2;
        index = number1;
    }

    for (;index != maxVal+1; index++) {
        totalSum = totalSum + index;
        
    }

    

    return totalSum;

};

function isInteger(value) {

    if (typeof value === "number" && Number.isInteger(value) && value > 0) {
        return true;
    }
    else return false;
}

// Do not edit below this line
module.exports = sumAll;
