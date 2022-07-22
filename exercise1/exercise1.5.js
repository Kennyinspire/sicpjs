//Ben Bitdiddle has invented a test to determine whether the interpreter he is faced with is
//using applicative-order evaluation or normal-order evaluation. He declares the following two functions:

function p() { 
    return p(); 
}

function test(x, y) {
return x === 0 ? 0 : y;
}

//Then he evaluates the statement
test(0, p());


// For an interpreter that uses applicative-order evaluati
/* 
 the interpreter first evaluates the test() function and argument expressions and then applies the resulting 
 function to the resulting arguments and echo 0.
*/


// For an interpreter that uses normal-order evaluati
/* 
The interpreter would substitute argument expressions for parameters first until it obtained an expression
 involving only operators and primitive functions, and would then perform the evaluation.
*/



