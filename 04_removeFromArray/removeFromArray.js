const removeFromArray = function(array, ...out) {
    let fitlered = array.filter(function filterout (item) {
        return !out.includes(item);
    })
    return fitlered
};

// Do not edit below this line
module.exports = removeFromArray;
