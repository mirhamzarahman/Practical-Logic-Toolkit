const {
    swapLeadingCharacters,
    findFuelRouteStart,
    allocateFairRewards
} = require("../src");

console.log("=== Practical Logic Toolkit ===\n");

// Label transformation
const labels = swapLeadingCharacters("bit", "set");
console.log("Updated labels:", labels);

// Circular fuel planning
const fuel = [1, 2, 3, 4, 5];
const cost = [3, 4, 5, 1, 2];

console.log(
    "Feasible starting station:",
    findFuelRouteStart(fuel, cost)
);

// Fair reward allocation
const ratings = [1, 0, 2];

console.log(
    "Minimum rewards required:",
    allocateFairRewards(ratings)
);
