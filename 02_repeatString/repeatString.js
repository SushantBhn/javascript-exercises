const repeatString = function(stringPassed, numberOfRepetition) {
    let repeatedString = "";

    if (numberOfRepetition < 0) {
        return "ERROR";
    }
    
    for (let i = 0; i < numberOfRepetition; i++) {
        repeatedString += stringPassed;
    }

    return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
