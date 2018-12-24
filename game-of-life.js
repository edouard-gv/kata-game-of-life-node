const next = function(previous) {
    newMap = [];
    for (c of previous) {
        n = livingNeighboursCount(previous, c)
        if (n == 2 || n == 3) {
            newMap.push(c);
        }
    }
    return newMap;
};

const neighbours = function(cell) {
    var x=cell[0];
    var y=cell[1];

    return([[x-1,y-1], [x,y-1], [x+1,y-1], [x-1,y], [x+1,y], [x-1,y+1], [x,y+1], [x+1,y+1]]);
};

const contains = function(map, cell) {
    return map.some(c => c[0] === cell[0] && c[1] === cell[1]);
};

const livingNeighboursCount = function(map, cell) {
    const cellNeighbours = [];
        for (const c of neighbours(cell)) {
        if (contains(map, c)) {
            cellNeighbours.push(c);
        }
    }

    return cellNeighbours.length;
};

module.exports = {next, neighbours, livingNeighboursCount, contains}
