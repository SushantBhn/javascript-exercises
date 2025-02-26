const sumAll = function(lowerRange, upperRange) {
    if (lowerRange < 0 || upperRange < 0 || typeof lowerRange !== "number" || typeof upperRange !== "number" || !Number.isInteger(lowerRange) || !Number.isInteger(upperRange)) {
        return "ERROR";
    }

    if (lowerRange > upperRange) {
        let temp = lowerRange;
        lowerRange = upperRange;
        upperRange = temp;
    }

    let sum = 0;

    for (let i = lowerRange; i <= upperRange; i++) {
        sum += i;
    }
    
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
