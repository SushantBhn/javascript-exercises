const removeFromArray = function(arr, ...items) {
    let newArr = [];

    arr.forEach((item) => {
        if (!items.includes(item)) {
            newArr.push(item);
        }
    });

    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
