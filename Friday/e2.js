/*:Create a function that takes an array arr of numbers and moves all zeros to the end, preserving the order of the other elements.
moveZeros([1, 0, 1, 2, 0, 1, 3]) ➞ [1, 1, 2, 1, 3, 0, 0]
moveZeros([0, 1, null, 2, false, 1, 0]) ➞ [1, null, 2, false, 1, 0, 0]
moveZeros(['a', 0, 0, 'b', 'c', 'd', 0, 1, 0, 1, 0, 3, 0, 1, 9, 0, 0, 0, 0, 9]) ➞ ['a', 'b', 'c', 'd', 1, 1, 3, 1, 9, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]*/

 function deletingZeroFromAnArray(arr){     
     
    const zeroTrue = arr.filter((item) => item === 0);
    const zeroFalse = arr.filter((item) => item != 0);
    let result = zeroFalse.concat(zeroTrue);
    return result;

}

console.log(deletingZeroFromAnArray(['a', 0, 0, 'b', 'c', 'd', 0, 1, 0, 1, 0, 3, 0, 1, 9, 0, 0, 0, 0, 9]));    
