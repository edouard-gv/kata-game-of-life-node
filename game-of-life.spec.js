const game = require('./game-of-life');
const test = require('tape');

test('final-one', function(t) {
    t.equal(game.next([]), []);
});
