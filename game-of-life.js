function next(previous) {
    newMap = [];
    for (cell of previous) {
        if (livingNeighboursCount(previous, cell) === 2) {
            newMap.push(cell);
        }
    }
    return newMap;
}

module.exports = {next, livingNeighboursCount};