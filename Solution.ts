
function leastInterval(tasks: string[], coolingTime: number): number {
    const ALPHABET_SIZE = 26;
    const frequency = new Array<number>(ALPHABET_SIZE).fill(0);

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

function codePoint(character: string): number {
    return character.codePointAt(0);
}
