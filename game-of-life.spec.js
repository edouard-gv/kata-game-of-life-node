test = require("tape");
game = require("./game-of-life");

test("une carte vide donne une carte vide", function(t) {
    t.deepEqual(game.next([]), []);
    t.end();
});

test("un solitaire donne une carte vide", function(t) {
    t.deepEqual(game.next([[1,1]]), []);
    t.end();
});