function next(previous) {

    newMap = previous.filter(function(cell) {
        let n = livingNeighboursCount(previous, cell);
        return (n === 3 || n === 2);
    });

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