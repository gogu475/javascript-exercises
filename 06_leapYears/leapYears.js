const leapYears = function(x) {
    // x % 400 === 0 ? true : x % 100 !== 0 && x % 4 === 0 ? true : false;
    if ( x % 400 === 0 || x % 100 !== 0 && x % 4 === 0 ) {
        return true;
    } 
    return false;
};

// Do not edit below this line
module.exports = leapYears;


// leap years
// are divisible by 4
// which are not divisible by 100
// except years divisible by 400

// start with the exception

// years divisible by 400 or years divisible by 4 and not divisible by 100

