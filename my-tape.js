const tape = require('tape');
const addAssertion = require('extend-tape');
const defined = require('defined');

const test = addAssertion(tape, {
    setCompare (a, b, msg, extra) {
        this._assert(setCompare(a, b, { strict: true }), {
            message : defined(msg, 'should be equivalent'),
            operator : 'setCompare',
            actual : a,
            expected : b,
            extra : extra
        });
    }
});

//TODO : faudrait plutôt passer le contains en parametre du module...
const contains = function(map, cell) {
    return map.some(c => c[0] === cell[0] && c[1] === cell[1] )
};


function setCompare(map1, map2) {
    if (map1.length !== map2.length) {
        return false;
    }
    for (cell of map1) {
        if (!contains(map2, cell)) {
            return false;
        }
    }
    return true;
}

// for unit testing only
test.setCompare = setCompare;

module.exports = test;