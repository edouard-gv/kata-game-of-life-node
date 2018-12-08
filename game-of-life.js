function next(previous) {
    return previous.filter(function(cell) {
        return livingNeighboursCount(previous, cell) === 2;
    });
}

function livingNeighboursCount(map, cell) {
    return 0;
}

function contains(map, cell) {
    return map.some(c => c[0]===cell[0] && c[1]===cell[1]);
}

module.exports = {next, livingNeighboursCount, contains};