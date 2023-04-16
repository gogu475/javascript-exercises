const removeFromArray = function() {
    let myArray = arguments[0]; // returns  array
    for (let i = 1; i < arguments.length; i++) {
        let searchFor = arguments[i];
        for (let j = 0; j < myArray.length; j++) {
            if (myArray[j] === searchFor) {
                myArray.splice(j, 1);
            }
        }
    }
    return myArray;
};

// for every argument after the first one
// loop through the array given in the first argument
// if the array item matches the argument being tested
// remove that item from the array 

// Do not edit below this line
module.exports = removeFromArray;
