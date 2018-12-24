const game = require('./game-of-life');
const test = require('tape');

test('empty map gives empty map', function(t) {
    t.deepEqual(game.next([]), []);
    t.end();
});

test.skip('one cell should die', function(t) {
    t.deepEqual(game.next([[1,1]]), []);
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

test('living-neighbours', function(t) {
    t.deepEqual(game.livingNeighbours([], [1,1]), []);
    t.end();
});

test('living-neighbours-two', function(t) {
    t.true(game.contains(game.livingNeighbours([[0,1], [1,0]], [1,1]), [0,1]));
    t.end();
});

test('living-neighbours-two', function(t) {
    t.true(game.contains(game.livingNeighbours([[0,1], [1,0], [1,3]], [1,1]), [1,0]));
    t.end();
});


test('contains', function(t) {
    t.true(game.contains([[1,1], [2,2]], [1,1]));
    t.false(game.contains([[1,1], [2,2]], [0,0]));
    t.false(game.contains([], [0,0]));
    t.end()
});




