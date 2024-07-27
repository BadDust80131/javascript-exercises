const sumAll = function(x,y) {
    let result = 0;
    if (x < 0 || y < 0) {
        return "ERROR"
    }
    if (x % 1 !== 0 || y % 1 !== 0) {
        return "ERROR"
    }
    if (typeof x !== "number" || typeof y !== "number") {
        return "ERROR"
    }
    let y2 = Math.max(x,y);
    let x2 = Math.min(x,y);
    for (i=x2; i <= y2; i++) {
        result = result + i
    }
    return result
};

// Do not edit below this line
module.exports = sumAll;
