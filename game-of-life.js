function next(previous) {
    return previous.filter(function(cell) {
        return livingNeighboursCount(previous, cell) === 2;
    });
}

function livingNeighboursCount(map, cell) {
    return 0;
}

function neighbours(cell) {
    const x = cell[0];
    const y = cell[1];
    return [[x-1, y-1], [x, y-1], [x+1, y-1],
            [x, y-1], [x, y+1],
            [x+1,y-1],[x+1,y],[x+1,y+1]];
}


function contains(map, cell) {
    return map.some(c => c[0]===cell[0] && c[1]===cell[1]);
}

module.exports = {next, livingNeighboursCount, contains, neighbours};