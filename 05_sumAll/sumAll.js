const sumAll = function(firstIn, secondIn) {
    let smallIn;
    let bigIn;
    
    if (firstIn > secondIn) {
        smallIn = secondIn;
        bigIn = firstIn;
    } else {
        smallIn = firstIn;
        bigIn = secondIn;
    } // so the larger number can be last
    
    if (smallIn + bigIn < bigIn || typeof (smallIn + bigIn)  !== 'number') {
        return 'ERROR';
    } // tests for negative start; requires that start < end

    let sum = 0;
    
    for (let i = smallIn; i <= bigIn; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
