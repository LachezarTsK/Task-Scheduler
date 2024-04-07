
#include <vector>
#include <algorithm>
using namespace std;

class Solution {

    static const int ALPHABET_SIZE = 26;

public:
    int leastInterval(const vector<char>& tasks, int coolingTime) const {
        int maxFrequency = 0;
        int instancesOfMaxFrequency = 0;
        array<int, ALPHABET_SIZE> frequency{};

        for (const auto& task : tasks) {
            if (++frequency[task - 'A'] > maxFrequency) {
                maxFrequency = frequency[task - 'A'];
                instancesOfMaxFrequency = 1;
                continue;
            }
            instancesOfMaxFrequency += (frequency[task - 'A'] == maxFrequency) ? 1 : 0;
        }

        return max((maxFrequency - 1) * (coolingTime + 1) + instancesOfMaxFrequency,
                   static_cast<int>(tasks.size()));
    }
};
