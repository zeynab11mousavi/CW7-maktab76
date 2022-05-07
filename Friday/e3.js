/*Create acc function that returns the original value from a matrix with too many sub-arrays.
Examples
deNest([[[[[[[[[[[[3]]]]]]]]]]]]) ➞ 3
deNest([[[[[[[true]]]]]]]) ➞ true
deNest([[[[[[[[[[[[[[[[["edabit"]]]]]]]]]]]]]]]]]) ➞ "edabit"*/


/*function deNest(array) {

    return array.reduce(function(acc, index) {
    if (Array.isArray(index)) {
        return acc.concat(deNest(index))
    } else return acc.concat(index);
    
    },[])[0];
    }*/
    // console.log(deNest([[[[[[[true]]]]]]]));
    // console.log(deNest([[[[[[[[[[[[[[[[["edabit"]]]]]]]]]]]]]]]]]));
    
    
    function deNest(arr) {
        if (Array.isArray(arr)) {
            return deNest(arr[0]);
        } else {
            return arr;
        }
    }    
    
console.log(deNest([[[[[[[[[[[[3]]]]]]]]]]]]));