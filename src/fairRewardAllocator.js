/**
 * Calculates the minimum rewards needed to satisfy neighboring
 * rating constraints.
 *
 * Every participant receives at least one reward. A participant
 * with a higher rating than a neighbor receives more rewards.
 *
 * @param {number[]} ratings
 * @returns {number} Minimum total number of rewards.
 */
function allocateFairRewards(ratings) {
    if (!Array.isArray(ratings) || ratings.length === 0) {
        throw new TypeError("Ratings must be a non-empty array.");
    }

    if (
        ratings.some(
            rating => !Number.isFinite(rating) || rating < 0
        )
    ) {
        throw new RangeError("Ratings must be non-negative numbers.");
    }

    const participantCount = ratings.length;
    const rewards = new Array(participantCount).fill(1);

    // Pass 1: satisfy the left-neighbor constraint.
    for (let i = 1; i < participantCount; i++) {
        if (ratings[i] > ratings[i - 1]) {
            rewards[i] = rewards[i - 1] + 1;
        }
    }

    // Pass 2: satisfy the right-neighbor constraint.
    // Preserve any larger reward count assigned in pass 1.
    for (let i = participantCount - 2; i >= 0; i--) {
        if (ratings[i] > ratings[i + 1]) {
            rewards[i] = Math.max(
                rewards[i],
                rewards[i + 1] + 1
            );
        }
    }

    return rewards.reduce((total, count) => total + count, 0);
}

module.exports = { allocateFairRewards };
