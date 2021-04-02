const repeatString = function( string, num ) {
    if ( num < 0 ) {
        return 'ERROR';
    } else {
        let strToRepeat = string;
        let newStr = '';
        for (let i = num; i > 0; i--) {
            newStr = newStr + strToRepeat;
        }
        return newStr;
    }
}

module.exports = repeatString
