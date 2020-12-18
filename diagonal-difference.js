'use strict'

function returnValue(arr, f_index, s_index) {
    return arr[f_index][s_index];
}

/* 
    11 2 4
    4 5 6
    10 8 -12
*/

function diagonalDifference(arr) {
    // Write your code here
    let a = 0;
    let b = 0;

    for (let i = 0; i < arr[0].length; i++) {
        a += returnValue(arr, i, i)
        b += returnValue(arr, i, arr[i].length - (i + 1))
    }
    return Math.abs(a - b)
}
const val = [
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12],
]


console.log(diagonalDifference(val))