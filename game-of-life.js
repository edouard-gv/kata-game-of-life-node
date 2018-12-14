function survivors(previous) {
    return previous.filter(function (cell) {
        let n = livingNeighboursCount(previous, cell);
        return (n === 3 || n === 2);
    });
}

function births(previous) {
    let newCells = [];
    for (const cell of previous) {
        for (const neighbour of neighbours(cell)) {
            if (livingNeighboursCount(previous, neighbour) === 3) {
                newCells.push(neighbour);
            }
        }
    }
    return newCells;
}

function next(previous) {

    let nextMap = survivors(previous);

    for (const cell of births(previous)) {
        if (!contains(nextMap, cell)) {
            nextMap.push(cell);
        }
    }

    return nextMap;
}

function livingNeighboursCount(map, cell) {
    return neighbours(cell).filter(c => contains(map, c)).length;
}

function neighbours(cell) {
    const x = cell[0];
    const y = cell[1];
    return [[x-1, y-1], [x, y-1], [x+1, y-1],
            [x-1, y], [x+1, y],
            [x-1,y+1],[x,y+1],[x+1,y+1]];
}


function contains(map, cell) {
    return map.some(c => c[0]===cell[0] && c[1]===cell[1]);
}

module.exports = {next, livingNeighboursCount, contains, neighbours};