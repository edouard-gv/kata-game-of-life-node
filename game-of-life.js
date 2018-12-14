function survivors(previous) {
    return previous.filter(function (cell) {
        const n = livingNeighboursCount(previous, cell);
        return (n === 3 || n === 2);
    });
}

function next(previous) {

    let newMap = survivors(previous);

    for (const cell of previous) {
        for (const neighbour of neighbours(cell)) {
            if (!contains(newMap, neighbour) && livingNeighboursCount(previous, neighbour) === 3) {
                newMap.push(neighbour);
            }
        }
    }

    return newMap;
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