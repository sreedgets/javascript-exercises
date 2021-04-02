const removeFromArray = function( arr, el ) {
    const index = arr.indexOf( el );
    arr.splice( index, 1 );
    return arr;
}

module.exports = removeFromArray
