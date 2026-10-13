const test = require("node:test");
const assert = require("node:assert/strict");

const {
    swapLeadingCharacters,
    findFuelRouteStart,
    allocateFairRewards
} = require("../src");

test("exchanges the leading characters", () => {
    assert.deepEqual(
        swapLeadingCharacters("bit", "set"),
        ["sit", "bet"]
    );
});

test("handles identical labels", () => {
    assert.deepEqual(
        swapLeadingCharacters("cat", "cat"),
        ["cat", "cat"]
    );
});

test("rejects empty labels", () => {
    assert.throws(
        () => swapLeadingCharacters("", "cat"),
        TypeError
    );
});

test("finds a feasible circular fuel route", () => {
    assert.equal(
        findFuelRouteStart([1, 2, 3, 4, 5], [3, 4, 5, 1, 2]),
        3
    );
});

test("returns -1 when a route is impossible", () => {
    assert.equal(
        findFuelRouteStart([2, 3, 4], [3, 4, 3]),
        -1
    );
});

test("handles a single fuel station", () => {
    assert.equal(findFuelRouteStart([5], [3]), 0);
});

test("allocates the minimum rewards for a valley", () => {
    assert.equal(allocateFairRewards([1, 0, 2]), 5);
});

test("handles equal neighboring ratings", () => {
    assert.equal(allocateFairRewards([1, 2, 2]), 4);
});

test("handles strictly increasing ratings", () => {
    assert.equal(allocateFairRewards([1, 2, 3, 4]), 10);
});
