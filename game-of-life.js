var game = {
    next: function(previous) {
        return previous;
    },

    neighbours: function(cell) {
        return([[-1,-1], [0,-1], [1,-1], [-1,0], [1,0], [-1,1], [0,1], [1,1]]);
    },

    contains: function(map, cell) {
        return map.some(c => c[0] === cell[0] && c[1] === cell[1]);
    }
}

module.exports = game;
