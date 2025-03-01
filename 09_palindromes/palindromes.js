const palindromes = function (str) {
    str = str.toLowerCase();
    let arr = str.split("");
    //Filter out non-alphanumeric characters
    arr = arr.filter((char) => {
        if(char === "," || char === "!" || char === "." || char === " ") {
            return false;
        }
        return true;
    });
    let originalArr = arr.slice(0);
    let reversedArr = arr.reverse();
    return originalArr.join("") === reversedArr.join("");
}
// Do not edit below this line
module.exports = palindromes;
