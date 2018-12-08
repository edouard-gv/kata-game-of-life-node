test = require("tape");

test("Test vide", function(t) {
    t.true(true);
    t.end();
});

test.skip("Test faux", function(t) {
    t.true(false);
    t.end();
});