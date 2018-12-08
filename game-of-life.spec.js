test = require("tape");
game = require("./game-of-life");

test("une carte vide donne une carte vide", function(t) {
    t.deepEqual(game.next([]), []);
    t.end();
});
