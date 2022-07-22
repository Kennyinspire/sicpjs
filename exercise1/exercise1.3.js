//Exercise 1.3: Declare a function that takes three numbers as arguments and returns the sum of the squares of the two larger number

let bigSum = function sum_of_larger_number (x, y, z) {
    if ((x<y && x<z)) {
        return (y*y) + (z*z);
    } else if ((y<x && y<z)) {
        return (x*x) + (z*z);
    } else if ((z<x && z<y)) {
        return (x*x) + (y*y);
    };    
}

console.log(bigSum(2,3,4));