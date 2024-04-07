
using System;

public class Solution
{

    private static readonly int ALPHABET_SIZE = 26;

    public int LeastInterval(char[] tasks, int coolingTime)
    {
        int maxFrequency = 0;
        int instancesOfMaxFrequency = 0;
        int[] frequency = new int[ALPHABET_SIZE];

        foreach (int task in tasks)
        {
            if (++frequency[task - 'A'] > maxFrequency)
            {
                maxFrequency = frequency[task - 'A'];
                instancesOfMaxFrequency = 1;
                continue;
            }
            instancesOfMaxFrequency += (frequency[task - 'A'] == maxFrequency) ? 1 : 0;
        }

        return Math.Max((maxFrequency - 1) * (coolingTime + 1) + instancesOfMaxFrequency, tasks.Length);
    }
}
