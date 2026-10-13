/**
 * Exchanges the first character of two non-empty labels.
 *
 * @param {string} firstLabel
 * @param {string} secondLabel
 * @returns {[string, string]}
 */
function swapLeadingCharacters(firstLabel, secondLabel) {
    if (
        typeof firstLabel !== "string" ||
        typeof secondLabel !== "string" ||
        firstLabel.length === 0 ||
        secondLabel.length === 0
    ) {
        throw new TypeError("Labels must be non-empty strings.");
    }

    const updatedFirst = secondLabel[0] + firstLabel.slice(1);
    const updatedSecond = firstLabel[0] + secondLabel.slice(1);

    return [updatedFirst, updatedSecond];
}

module.exports = { swapLeadingCharacters };
