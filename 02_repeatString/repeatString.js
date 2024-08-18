const repeatString = function(string, ct) {
    if (ct < 0) return "ERROR"
    let res = "";
    for(let x=0; x<ct; ++x) {
        res = res.concat(string);
    }
    return res;
};

// Do not edit below this line
module.exports = repeatString;
