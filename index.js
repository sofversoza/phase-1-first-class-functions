//callback function as argument
//call callback function
//return value doesn't matter
function receivesAFunction(callback) {
    return callback();
}

//take no arguments 
//return a named function
function returnsANamedFunction() {
    return returnsANamedFunction;
}

//take no arguments
//return an anonymous function
function returnsAnAnonymousFunction() {
    return function() {}
}




