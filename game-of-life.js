function next(previous) {
    return previous.filter(function(cell) {
        return livingNeighboursCount(previous, cell) === 3;
    });
}

function livingNeighboursCount(map, cell) {
    return neighbours(cell).filter(c => contains(map, c)).length;
}

function neighbours([x,y]) {
    return [[x-1, y-1], [x  , y-1], [x+1, y-1],
            [x-1, y  ], /* cell */  [x+1, y  ],
            [x-1, y+1], [x  , y+1], [x+1, y+1]];
}


function contains(map, cell) {
    return map.some(c => c[0]===cell[0] && c[1]===cell[1]);
}

module.exports = {next, livingNeighboursCount, contains, neighbours};