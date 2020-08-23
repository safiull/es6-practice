// normal function
function num(num){
    return num * 2;
}
//console.log(num(10));

// Function with variable.
const functionWithVar = function(num){
    return num *2;
}
//console.log(functionWithVar(20));

// function in one line with arrow for one parameter.
const arrowFunction = num => num *2;
//console.log(arrowFunction(3));

// function in one line with arrow for two parameter.
//const twoParameter = (x, y) => x + y;
//console.log(twoParameter(3,2));

// function in one line with arrow without any parameter.
const setValue = () => 5;
//console.log(setValue());

// Large function with variable function

const largeFunction = (x,y) => {
    let addition = x + y;
    let summation = x - y;
    console.log(addition);
    console.log(summation);
    console.log(addition+summation);
}

largeFunction(3,4)