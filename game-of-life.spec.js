test = require("tape");
defined = require("defined");
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

/**
 * .....     .....     .....
 * ..*..     .....     ..*..
 * ..*.. ==> .***. ==> ..*..
 * ..*..     .....     ..*..
 * .....     .....     .....
 * Configuration idem potente de rang 2, qui clignote donc
 * next(next(blinkH)) = next(blinkV) = blinkH
 * Vérifie
 * que les cellules entourée de 2 cellules surivivent,
 * que celles entourées de 3 naissent,
 * que cellent entourée de 0 ou 1 cellule meurent
 */

const blinkV = [[2,1], [2,2], [2,3]];
const blinkH = [[1,2], [2,2], [3,2]];


test("une carte vide donne une carte vide", function(t) {
    t.deepEqual(game.next([]), []);
    t.end();
});

test("un solitaire donne une carte vide", function(t) {
    t.deepEqual(game.next([[1,1]]), []);
    t.end();
});

test("configuration stable", function(t) {
    t.deepEqual(game.next(stable), stable);
    t.end();
});

test("configuration blink", function(t) {
    t.deepUnsortedEqual = deepUnsortedEqual;
    t.deepUnsortedEqual(game.next(blinkH), blinkH);
    t.deepUnsortedEqual(game.next(blinkV), blinkH);
    t.end();
});

test("nombre de voisins vivants dans une configuration stable", function(t) {
    t.equals(game.livingNeighboursCount(stable, [1,1]), 3);
    t.end();
});


test("nombre de voisins vivants vide", function(t) {
    t.equals(game.livingNeighboursCount([], [1,1]), 0);
    t.end();
});

test("voisins", function(t) {
    t.false(game.contains(game.neighbours([1,1]), [1,1]));
    t.equals(game.neighbours([1,1]).length, 8);
    t.true(game.contains(game.neighbours([1,1]), [0,0]));
    t.true(game.contains(game.neighbours([1,1]), [1,0]));
    t.true(game.contains(game.neighbours([1,1]), [2,0]));
    t.true(game.contains(game.neighbours([1,1]), [0,1]));
    t.true(game.contains(game.neighbours([1,1]), [2,1]));
    t.true(game.contains(game.neighbours([1,1]), [0,2]));
    t.true(game.contains(game.neighbours([1,1]), [1,2]));
    t.true(game.contains(game.neighbours([1,1]), [2,2]));
    t.end();
});

test("contains", function(t) {
    t.false(game.contains([],[0,0]));
    t.true(game.contains([[0,1],[1,1]],[1,1]));
    t.false(game.contains([[0,1],[1,1]],[2,1]));
    t.end();
});

function unsortedEquals(map1, map2) {
    if (map1.length !== map2.length) {
        return false;
    }
    for (const c of map1) {
        if (!game.contains(map2, c)) {
            return false;
        }
    }
    for (const c of map2) {
        if (!game.contains(map1, c)) {
            return false;
        }
    }
    return true;
}

test("egalité sans ordre", function(t) {
    t.true(unsortedEquals([], []));
    t.true(unsortedEquals([[1,1]], [[1,1]]));
    t.true(unsortedEquals([[1,1], [2,2]], [[2,2], [1,1]]));
    t.true(unsortedEquals([[1,1], [2,2], [3,3]], [[2,2], [3,3], [1,1]]));
    t.false(unsortedEquals([[1,1], [2,2], [3,3]], [[2,2], [3,4], [1,1]]));
    t.false(unsortedEquals([[1,1], [2,2], [3,3]], [[1,1], [2,2]]));
    t.false(unsortedEquals([[1,1], [2,2]], [[1,1], [2,2], [3,3]]));
    t.false(unsortedEquals([[1,1], [2,2], [2,2]], [[1,1], [2,2]]));
    t.false(unsortedEquals([[1,1], [2,2]], [[1,1], [2,2], [2,2]]));
    t.false(unsortedEquals([[1,1], [1,1]], [[1,1], [1,2]]));
    t.false(unsortedEquals([[1,1], [1,2]], [[1,1], [1,1]]));

    t.end();
});

function deepUnsortedEqual(a, b, msg, extra) {
    this._assert(unsortedEquals(a, b), {
        message : defined(msg, 'should be equivalent'),
        operator : 'deepUnsortedEqual',
        actual : a,
        expected : b,
        extra : extra
    });
}
