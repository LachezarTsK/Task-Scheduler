
import kotlin.math.max

class Solution {

    companion object{
        const val ALPHABET_SIZE = 26
    }

    fun leastInterval(tasks: CharArray, coolingTime: Int): Int {
        var maxFrequency = 0
        var instancesOfMaxFrequency = 0
        val frequency = IntArray(ALPHABET_SIZE);

        for (task in tasks) {
            if (++frequency[task - 'A'] > maxFrequency) {
                maxFrequency = frequency[task - 'A'];
                instancesOfMaxFrequency = 1;
                continue;
            }
            instancesOfMaxFrequency += if (frequency[task - 'A'] == maxFrequency)  1 else 0;
        }

        return max((maxFrequency - 1) * (coolingTime + 1) + instancesOfMaxFrequency, tasks.size);
    }
}
