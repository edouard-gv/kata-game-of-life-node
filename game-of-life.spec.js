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


