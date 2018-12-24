var game = {
    next: function(previous) {
        return previous;
    },

    neighbours: function(cell) {
        var x=cell[0];
        var y=cell[1];

        return([[x-1,y-1], [x,y-1], [x+1,y-1], [x-1,y], [x+1,y], [x-1,y+1], [x,y+1], [x+1,y+1]]);
    },

    contains: function(map, cell) {
        return map.some(c => c[0] === cell[0] && c[1] === cell[1]);
    }
}

module.exports = game;
