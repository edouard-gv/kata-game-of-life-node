const game = require('./game-of-life');
const test = require('tape');
var defined = require('defined');


function setCompare(map1, map2) {
    if (map1.length !== map2.length) {
        return false;
    }
    for (cell of map1) {
        if (!game.contains(map2, cell)) {
            return false;
        }
    }
    return true;
}

const tapeSetCompare = function (a, b, msg, extra) {
    this._assert(setCompare(a, b, { strict: true }), {
        message : defined(msg, 'should be equivalent'),
        operator : 'setCompare',
        actual : a,
        expected : b,
        extra : extra
    });
};

test('setCompare', function(t) {
    t.true(setCompare([],[]));
    t.true(setCompare([[0,1],[0,2]], [[0,1],[0,2]]));
    t.false(setCompare([[0,1],[0,3]], [[0,1],[0,2]]));
    t.false(setCompare([[0,1]], [[0,1],[0,2]]));
    t.false(setCompare([[0,1],[0,2]], [[0,2]]));
    t.end();
});


test('empty map gives empty map', function(t) {
    t.deepEqual(game.next([]), []);
    t.end();
});

test.skip('one cell should die', function(t) {
    t.deepEqual(game.next([[1,1]]), []);
    t.end();
});

test('convergor', function(t) {
    const convergor = [[1,1], [2,1], [1,2], [2,2]];
    t.deepEquals(game.next(convergor), convergor);
    t.end();
});

test('blink', function(t) {
    const green = [[1,2], [2,2], [3,2]];
    const blue  = [[2,1], [2,2], [2,3]];
    t.setCompare = tapeSetCompare;
    t.setCompare(game.next(blue), green);
    t.setCompare(game.next(green), blue);
    t.end();
});

test('neighbours size', function(t) {
    t.equal(game.neighbours([1,1]).length, 8);
    t.end();
});

test('neighbours', function(t) {
    t.false(game.contains(game.neighbours([1,1]), [1,1]));
    t.end();
});

test('no-living-neighbours', function(t) {
    t.equals(game.livingNeighboursCount([], [1,1]), 0);
    t.end();
});

test('two-living-neighbours', function(t) {
    t.equals(game.livingNeighboursCount([[0,1], [1,0]], [1,1]), 2);
    t.end();
});

test('only-two-living-neighbours', function(t) {
    t.equals(game.livingNeighboursCount([[0,1], [1,0], [1,3]], [1,1]), 2);
    t.end();
});

test('contains', function(t) {
    t.true(game.contains([[1,1], [2,2]], [1,1]));
    t.false(game.contains([[1,1], [2,2]], [0,0]));
    t.false(game.contains([], [0,0]));
    t.end()
});
