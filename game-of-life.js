function next(previous) {
    newMap = [];
    for (const cell of previous) {
        let n = livingNeighboursCount(previous, cell);
        if (!contains(newMap, cell) && (n === 3 || n === 2)) {
            newMap.push(cell);
        }
        for (const neighbour of neighbours(cell)) {
            if (!contains(newMap, neighbour) && livingNeighboursCount(previous, neighbour) === 3) {
                newMap.push(neighbour);
            }
        }

    }
    return newMap;
}

function livingNeighboursCount(map, cell) {
    n = 0;
    for (c of neighbours(cell)) {
        if (contains(map, c)) {
            n++;
        }
    }
    return n;
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