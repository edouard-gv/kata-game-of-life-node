function next(previous) {
    return previous.filter(function(cell) {
        return livingNeighboursCount(previous, cell) === 2;
    });
}

function livingNeighboursCount(map, cell) {
    return 0;
}

function contains(map, cell) {
    return false;
}

module.exports = {next, livingNeighboursCount, contains};