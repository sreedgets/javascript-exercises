const reverseString = function( str ) {
    let strToArr = str.split("");
    let newStr = strToArr.reverse().join("");

    return newStr;
}

module.exports = reverseString
