test = require("tape");
game = require("./game-of-life");

// Les configurations remarquables
/**
 * ....
 * .**.
 * .**.
 * ....
 * Configuration idempotente: next(stable) = stable
 * Vérifie que toute cellule entourée de 3 cellules survie.
 */

const stable = [[1,1],[2,1],[1,2],[2,2]];


test("une carte vide donne une carte vide", function(t) {
    t.deepEqual(game.next([]), []);
    t.end();
});

test("un solitaire donne une carte vide", function(t) {
    t.deepEqual(game.next([[1,1]]), []);
    t.end();
});

test.skip("configuration stable", function(t) {
   t.deepEqual(game.next(stable), stable);
   t.end();
});

test("nombre de voisins vivants vide", function(t) {
    t.equals(game.livingNeighboursCount([], [1,1]), 0);
    t.end();
});