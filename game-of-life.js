var game = {
    next: function(previous) {
        return previous;
    },

    neighbours: function(cell) {
        return([[-1,-1], [0,-1], [1,-1], [-1,0], [1,0], [-1,1], [0,1], [1,1]]);
    }
}

module.exports = game;
