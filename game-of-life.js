function next(previous) {
    newMap = [];
    for (cell of previous) {
        if (livingNeighboursCount(previous, cell) === 2) {
            newMap.push(cell);
        }
    }
    return newMap;
}

function livingNeighboursCount(map, cell) {
    return 0;
}

module.exports = {next, livingNeighboursCount};