const test = require('tape');
const myTape = require('./my-tape');

test('setCompare', function(t) {
    t.true(myTape.setCompare([],[]));
    t.true(myTape.setCompare([[0,1],[0,2]], [[0,1],[0,2]]));
    t.false(myTape.setCompare([[0,1],[0,3]], [[0,1],[0,2]]));
    t.false(myTape.setCompare([[0,1]], [[0,1],[0,2]]));
    t.false(myTape.setCompare([[0,1],[0,2]], [[0,2]]));
    t.end();
});

