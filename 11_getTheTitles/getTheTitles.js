const getTheTitles = function(books) {
    result = []
    for (let index = 0; index < books.length; index++) {
        result.push(books[index].title)
    }
    return result
};

// Do not edit below this line
module.exports = getTheTitles;
