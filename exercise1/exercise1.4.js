
function plus(a, b) { 
    return a + b; 
};


function minus(a, b) { 
    return a - b;
}; 


// This function takes two arguments (a,b), then check if b >= 0, run plus function, else run minus function
function a_plus_abs_b(a, b) {
    return (b >= 0 ? plus : minus)(a, b);
};

let a = 3;
let b = 4;

console.log(a_plus_abs_b(a,b));