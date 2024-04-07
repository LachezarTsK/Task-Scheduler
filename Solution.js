
/**
 * @param {character[]} tasks
 * @param {number} coolingTime
 * @return {number}
 */
var leastInterval = function (tasks, coolingTime) {
    const ALPHABET_SIZE = 26;
    const frequency = new Array(ALPHABET_SIZE).fill(0);

    let maxFrequency = 0;
    let instancesOfMaxFrequency = 0;

    for (let task of tasks) {
        if (++frequency[codePoint(task) - codePoint('A')] > maxFrequency) {
            maxFrequency = frequency[codePoint(task) - codePoint('A')];
            instancesOfMaxFrequency = 1;
            continue;
        }
        instancesOfMaxFrequency += (frequency[codePoint(task) - codePoint('A')] === maxFrequency) ? 1 : 0;
    }

    return Math.max((maxFrequency - 1) * (coolingTime + 1) + instancesOfMaxFrequency, tasks.length);
};

/**
 * @param {string} character
 * @return {number}
 */
function codePoint(character) {
    return character.codePointAt(0);
}
