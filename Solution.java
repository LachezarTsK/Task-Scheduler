
public class Solution {

    private static final int ALPHABET_SIZE = 26;

    public int leastInterval(char[] tasks, int coolingTime) {
        int maxFrequency = 0;
        int instancesOfMaxFrequency = 0;
        int[] frequency = new int[ALPHABET_SIZE];

        for (int task : tasks) {
            if (++frequency[task - 'A'] > maxFrequency) {
                maxFrequency = frequency[task - 'A'];
                instancesOfMaxFrequency = 1;
                continue;
            }
            instancesOfMaxFrequency += (frequency[task - 'A'] == maxFrequency) ? 1 : 0;
        }

        return Math.max((maxFrequency - 1) * (coolingTime + 1) + instancesOfMaxFrequency, tasks.length);
    }
}
