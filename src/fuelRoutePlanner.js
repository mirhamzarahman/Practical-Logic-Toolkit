/**
 * Finds a feasible starting station for a circular fuel route.
 *
 * @param {number[]} availableFuel - Fuel available at each station.
 * @param {number[]} travelCost - Fuel needed to reach the next station.
 * @returns {number} Starting index, or -1 if no route is possible.
 */
function findFuelRouteStart(availableFuel, travelCost) {
    if (
        !Array.isArray(availableFuel) ||
        !Array.isArray(travelCost) ||
        availableFuel.length !== travelCost.length
    ) {
        throw new TypeError("Fuel and cost must be equal-length arrays.");
    }

    const stationCount = availableFuel.length;

    if (stationCount === 0) {
        return -1;
    }

    let totalFuelBalance = 0;
    let currentFuelBalance = 0;
    let candidateStart = 0;

    for (let station = 0; station < stationCount; station++) {
        const fuel = availableFuel[station];
        const cost = travelCost[station];

        if (
            !Number.isFinite(fuel) ||
            !Number.isFinite(cost) ||
            fuel < 0 ||
            cost < 0
        ) {
            throw new RangeError("Fuel and costs must be non-negative numbers.");
        }

        const netFuel = fuel - cost;

        totalFuelBalance += netFuel;
        currentFuelBalance += netFuel;

        // This candidate cannot reach the next station.
        // Start testing from the following station instead.
        if (currentFuelBalance < 0) {
            candidateStart = station + 1;
            currentFuelBalance = 0;
        }
    }

    return totalFuelBalance >= 0 ? candidateStart : -1;
}

module.exports = { findFuelRouteStart };
