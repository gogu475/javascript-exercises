const reverseString = function(string) {
    let output = "";
    let chars = string.split("");
    chars = chars.reverse();
    for (const char of chars) {
        output += char;
    }
    return output;
};

// Do not edit below this line
module.exports = reverseString;
