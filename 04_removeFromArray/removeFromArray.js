const removeFromArray = function(array, out) {
    let fitlered = array.filter(function filterout (item) {
        return item !== out;
    })
    return fitlered
};

// Do not edit below this line
module.exports = removeFromArray;
