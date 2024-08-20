const palindromes = function (str) {
    str = str.trim();
    str = str.toLowerCase();
    str = str.replace(/[^\w]|[\s]/g,"");
    return str.split('').reverse().join('') === str;

};

// Do not edit below this line
module.exports = palindromes;
