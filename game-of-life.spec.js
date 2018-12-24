const game = require('./game-of-life');
const test = require('tape');

test('empty map gives empty map', function(t) {
    t.deepEqual(game.next([]), []);
    t.end();
});

test('one cell should die', function(t) {
    t.deepEqual(game.next([[1,1]]), []);
    t.end();
});
