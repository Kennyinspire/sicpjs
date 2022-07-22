// Below is a sequence of statements. What is the result printed by the interpreter in response
// to each statement? Assume that the sequence is to be evaluated in the order in which it is presented.

10; //Answer is 10

5 + 3 + 4; //Answer is 12

9 - 1; // Answer is 8

6 / 2; // Answer is 3

2 * 4 + (4 - 6); // Answer is 6

const a = 3;
const b = a + 1; //4

a + b + a * b;  // Answer 14

a === b; // false

b > a && b < a * b ? b : a; // Answer is 4;

a === 4 ? 6 : b === 4 ? 6 + 7 + a : 25; // Answer is 16

2 + (b > a ? b : a); //Answer is 6

(a > b ? a : a < b ? b : -1) * (a + 1); //Answer is 16
