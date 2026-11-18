import type { Topic } from '../../types/question'

export const hardTopic: Topic = {
  id: 'hard',
  name: 'Hard',
  description: 'Advanced DP, bit tricks, binary search on answer, and greedy.',
  questions: [
    {
      id: 'q36-rpg-monster-defeat-greedy-sorting',
      title: 'RPG Monster Defeat (Greedy Sorting)',
      difficulty: 'hard',
      tags: ['greedy', 'sorting'],
      problem:
        'You are playing an RPG with n monsters. Monster i requires power[i] experience to defeat and grants bonus[i] experience after defeat. You start with initialExp experience points. You may fight monsters in any order. To defeat monster i you need current experience ≥ power[i]; after defeating it, experience becomes experience + bonus[i]. Return the maximum number of monsters you can defeat.',
      examples: [
        'Input: n = 3, initialExp = 5, power = [3, 7, 2], bonus = [4, 3, 5]\nOutput: 3\nExplanation: Defeat monster with power 2 (exp 5→10), then power 3 (10→14), then power 7 (14→17). All three can be defeated.',
        'Input: n = 2, initialExp = 1, power = [5, 10], bonus = [100, 100]\nOutput: 0\nExplanation: Starting experience 1 is less than every monster\'s power, so none can be defeated.',
        'Input: n = 4, initialExp = 4, power = [4, 5, 6, 100], bonus = [1, 1, 1, 1]\nOutput: 3\nExplanation: Order by power: defeat 4→5, then 5→6, then 6→7. The monster with power 100 remains unbeatable.',
      ],
      constraints: [
        '1 <= n <= 10^5',
        '1 <= initialExp <= 10^9',
        'power.length == bonus.length == n',
        '1 <= power[i], bonus[i] <= 10^9',
      ],
      hints: [
        {
          id: 'h1',
          text: 'Sort monsters by power ascending. Greedily defeat as many as possible in order of power.',
        },
        {
          id: 'h2',
          text: 'Complexity: Time O(n log n), Space O(1)',
        },
      ],
    },
    {
      id: 'q37-xor-sum-maximization',
      title: 'Xor-Sum Maximization',
      difficulty: 'hard',
      tags: ['bit-manipulation', 'greedy'],
      problem:
        'Given an integer array nums and an integer k, define Xor-Sum(x) = (x XOR nums[0]) + (x XOR nums[1]) + … + (x XOR nums[n − 1]). Find an integer x in the range [0, k] that maximises Xor-Sum(x). Return that maximum Xor-Sum value.',
      examples: [
        'Input: nums = [1, 2, 3], k = 3\nOutput: 6\nExplanation: x = 0 gives (0^1)+(0^2)+(0^3) = 1+2+3 = 6, which is optimal for this k.',
        'Input: nums = [5, 5], k = 10\nOutput: 30\nExplanation: x = 10 → (10^5)+(10^5) = 15+15 = 30.',
        'Input: nums = [1, 8, 8], k = 7\nOutput: 36\nExplanation: The best x in [0, 7] yields Xor-Sum 36.',
      ],
      constraints: [
        '1 <= nums.length <= 3000',
        '0 <= nums[i] <= 5 * 10^5',
        '0 <= k <= 5 * 10^5',
      ],
      hints: [
        {
          id: 'h1',
          text: 'For each bit position, decide whether setting that bit in x increases the sum without exceeding K. Process from MSB to LSB.',
        },
        {
          id: 'h2',
          text: 'Complexity: Time O(n·log K), Space O(1)',
        },
      ],
    },
    {
      id: 'q38-lis-with-bitwise-operation-condition',
      title: 'LIS with Bitwise Operation Condition',
      difficulty: 'hard',
      tags: ['dp', 'bit-manipulation'],
      problem:
        'Given an integer array nums of length n, a bitwise operation op which is one of AND, OR, or XOR, and an integer target, find the length of the longest strictly increasing subsequence such that every pair of adjacent elements a, b in the subsequence satisfies (a op b) == target. If no valid subsequence of length at least 1 exists under the rules you adopt for single-element subsequences, return 0; otherwise a single element is always a valid subsequence of length 1.',
      examples: [
        'Input: nums = [1, 3, 2, 4], op = "AND", target = 0\nOutput: 3\nExplanation: One valid LIS is [1, 2, 4]: 1 AND 2 = 0 and 2 AND 4 = 0, and values strictly increase.',
        'Input: nums = [1, 2, 3, 4], op = "OR", target = 3\nOutput: 2\nExplanation: e.g. [1, 2] because 1 OR 2 = 3. Longer chains fail the OR condition.',
        'Input: nums = [5, 5, 5], op = "XOR", target = 0\nOutput: 1\nExplanation: Equal values cannot form a strictly increasing pair; best length is 1.',
      ],
      constraints: [
        '1 <= n <= 1000',
        '0 <= nums[i] <= 10^9',
        'op is one of "AND", "OR", "XOR"',
        '0 <= target <= 10^9',
      ],
      hints: [
        {
          id: 'h1',
          text: 'Modify standard LIS DP. dp[i] = length of valid subsequence ending at index i. For each j < i, if A[j] OP A[i] == target and A[j] < A[i], update dp[i].',
        },
        {
          id: 'h2',
          text: 'Complexity: Time O(n²), Space O(n)',
        },
      ],
    },
    {
      id: 'q39-split-array-into-k-consecutive-segments',
      title: 'Split Array into K Consecutive Segments',
      difficulty: 'hard',
      tags: ['binary-search', 'greedy'],
      problem:
        'Given an integer array nums and an integer k, split nums into k non-empty contiguous subarrays such that the largest sum of any subarray is minimized. Return the minimized largest sum of the split. A subarray is a contiguous part of the array.',
      examples: [
        'Input: nums = [7, 2, 5, 10, 8], k = 2\nOutput: 18\nExplanation: Split into [7, 2, 5] and [10, 8]; the largest sum among the two subarrays is 18.',
        'Input: nums = [7, 2, 5, 10, 8], k = 3\nOutput: 14\nExplanation: One optimal split is [7, 2, 5], [10], [8] with largest sum 14.',
        'Input: nums = [1, 2, 3, 4, 5], k = 2\nOutput: 9\nExplanation: Split into [1, 2, 3] and [4, 5]; the largest sum is 9.',
      ],
      constraints: [
        '1 <= nums.length <= 1000',
        '0 <= nums[i] <= 10^6',
        '1 <= k <= min(50, nums.length)',
      ],
      hints: [
        {
          id: 'h1',
          text: 'Binary search on the answer (minimum possible max sum). For a given mid, greedily check if array can be split into ≤ K parts with each part ≤ mid.',
        },
        {
          id: 'h2',
          text: 'Complexity: Time O(n log(sum)), Space O(1)',
        },
      ],
    },
    {
      id: 'q40-coin-change-minimum-number-of-coins',
      title: 'Coin Change — Minimum Number of Coins',
      difficulty: 'hard',
      tags: ['dp'],
      problem:
        'You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money. Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1. You may assume that you have an infinite number of each kind of coin.',
      examples: [
        'Input: coins = [1, 2, 5], amount = 11\nOutput: 3\nExplanation: 11 = 5 + 5 + 1.',
        'Input: coins = [2], amount = 3\nOutput: -1',
        'Input: coins = [1], amount = 0\nOutput: 0',
      ],
      constraints: [
        '1 <= coins.length <= 12',
        '1 <= coins[i] <= 2^31 - 1',
        '0 <= amount <= 10^4',
      ],
      hints: [
        {
          id: 'h1',
          text: 'DP. dp[i] = min coins for amount i. For each coin, dp[i] = min(dp[i], dp[i-coin]+1).',
        },
        {
          id: 'h2',
          text: 'Complexity: Time O(amount × coins), Space O(amount)',
        },
      ],
    },
    {
      id: 'q41-edit-distance-levenshtein-distance',
      title: 'Edit Distance (Levenshtein Distance)',
      difficulty: 'hard',
      tags: ['dp', 'string'],
      problem:
        'Given two strings word1 and word2, return the minimum number of operations required to convert word1 to word2. You have the following three operations permitted on a word:\n\n- Insert a character\n- Delete a character\n- Replace a character',
      examples: [
        'Input: word1 = "horse", word2 = "ros"\nOutput: 3\nExplanation: horse → rorse (replace \'h\' with \'r\'), rorse → rose (remove \'r\'), rose → ros (remove \'e\').',
        'Input: word1 = "intention", word2 = "execution"\nOutput: 5\nExplanation: intention → inention (remove \'t\'), inention → enention (replace \'i\' with \'e\'), enention → exention (replace \'n\' with \'x\'), exention → exection (replace \'n\' with \'c\'), exection → execution (insert \'u\').',
        'Input: word1 = "", word2 = "a"\nOutput: 1\nExplanation: Insert \'a\' into the empty string.',
      ],
      constraints: [
        '0 <= word1.length, word2.length <= 500',
        'word1 and word2 consist of lowercase English letters.',
      ],
      hints: [
        {
          id: 'h1',
          text: '2D DP. dp[i][j] = edit distance between S[0..i-1] and T[0..j-1]. If chars match: dp[i-1][j-1]; else 1 + min(insert, delete, replace).',
        },
        {
          id: 'h2',
          text: 'Complexity: Time O(m·n), Space O(m·n)',
        },
      ],
    },
    {
      id: 'q42-minimum-insertions-to-make-a-string-palindrome',
      title: 'Minimum Insertions to Make a String Palindrome',
      difficulty: 'hard',
      tags: ['dp', 'string'],
      problem:
        'Given a string s. In one step you can insert any character at any index of the string. Return the minimum number of steps to make s palindrome. A palindrome string is one that reads the same backward as well as forward.',
      examples: [
        'Input: s = "zzazz"\nOutput: 0\nExplanation: The string "zzazz" is already a palindrome; no insertions are needed.',
        'Input: s = "mbadm"\nOutput: 2\nExplanation: String can become "mbdadbm" or "mdbabdm".',
        'Input: s = "leetcode"\nOutput: 5\nExplanation: Inserting 5 characters can make the string "leetcodocteel".',
      ],
      constraints: [
        '1 <= s.length <= 500',
        's consists of lowercase English letters.',
      ],
      hints: [
        {
          id: 'h1',
          text: 'Find the Longest Palindromic Subsequence (LPS) of S, which equals LCS(S, reverse(S)). Answer = N - LPS.',
        },
        {
          id: 'h2',
          text: 'Complexity: Time O(n²), Space O(n²)',
        },
      ],
    },
    {
      id: 'q43-0-1-knapsack-problem',
      title: '0/1 Knapsack Problem',
      difficulty: 'hard',
      tags: ['dp'],
      problem:
        'Given n items, where the i-th item has weight weights[i] and value values[i], and a knapsack with capacity W, find the maximum total value of items you can put in the knapsack. Each item can be included at most once (0/1 choice; no fractions).',
      examples: [
        'Input: n = 3, W = 4, weights = [4, 5, 1], values = [1, 2, 3]\nOutput: 3\nExplanation: Take the item with weight 1 and value 3.',
        'Input: n = 4, W = 5, weights = [2, 3, 4, 5], values = [3, 4, 5, 6]\nOutput: 7\nExplanation: Take items with weights 2 and 3 (values 3 + 4 = 7).',
        'Input: n = 1, W = 3, weights = [5], values = [10]\nOutput: 0\nExplanation: The only item exceeds capacity.',
      ],
      constraints: [
        '1 <= n <= 1000',
        '1 <= W <= 1000',
        'weights.length == values.length == n',
        '1 <= weights[i] <= 1000',
        '1 <= values[i] <= 1000',
      ],
      hints: [
        {
          id: 'h1',
          text: '2D DP: dp[i][w] = max value using first i items with capacity w. Either skip item i or include it (if weight[i] ≤ w).',
        },
        {
          id: 'h2',
          text: 'Complexity: Time O(n·W), Space O(n·W)',
        },
      ],
    },
    {
      id: 'q44-maximum-xor-subset-with-at-most-n-2-elements',
      title: 'Maximum XOR Subset with at Most N/2 Elements',
      difficulty: 'hard',
      tags: ['bit-manipulation'],
      problem:
        'Given an array nums of n integers (n may be odd or even), choose a subset of at most floor(n / 2) elements (not necessarily contiguous). Maximise the bitwise XOR of the selected elements. Return the maximum XOR value (choosing an empty subset yields 0).',
      examples: [
        'Input: nums = [1, 2, 4, 7]\nOutput: 7\nExplanation: At most floor(4/2)=2 elements. The singleton {7} yields XOR 7, which is optimal among all subsets of size ≤ 2.',
        'Input: nums = [2, 4, 6, 8]\nOutput: 14\nExplanation: 6 ^ 8 = 14 using 2 ≤ floor(4/2) elements.',
        'Input: nums = [7]\nOutput: 0\nExplanation: floor(1/2)=0, so only the empty subset is allowed.',
      ],
      constraints: [
        '1 <= nums.length <= 100',
        '0 <= nums[i] <= 255',
      ],
      hints: [
        {
          id: 'h1',
          text: 'Build a linear XOR basis (Gaussian elimination over GF(2)). Maximise XOR from the basis under the size constraint.',
        },
        {
          id: 'h2',
          text: 'Complexity: Time O(n·30), Space O(30)',
        },
      ],
    },
    {
      id: 'q45-minimum-inversions-after-xor-ing-with-b',
      title: 'Minimum Inversions After XOR-ing with B',
      difficulty: 'hard',
      tags: ['bit-manipulation', 'trie'],
      problem:
        'Given an integer array nums of length n, you may choose any non-negative integer B and replace every nums[i] with nums[i] XOR B. An inversion is a pair of indices (i, j) with i < j and nums[i] > nums[j] after the XOR. Choose B to minimise the number of inversions. Return that minimum inversion count modulo 10^9 + 7.',
      examples: [
        'Input: nums = [3, 1, 2]\nOutput: 1\nExplanation: With B = 1 the array becomes [2, 0, 3], which has exactly one inversion. This is optimal.',
        'Input: nums = [1, 2, 3]\nOutput: 0\nExplanation: Already sorted; B = 0 keeps 0 inversions.',
        'Input: nums = [5, 4, 3, 2, 1]\nOutput: 0\nExplanation: With B = 7 the array becomes [2, 3, 4, 5, 6], which is strictly increasing (0 inversions).',
      ],
      constraints: [
        '1 <= n <= 10^5',
        '0 <= nums[i] <= 10^9',
        'Answer is reported modulo 10^9 + 7.',
      ],
      hints: [
        {
          id: 'h1',
          text: 'For each bit position independently, decide whether flipping that bit reduces inversions. Use a trie to count inversions bit-by-bit from MSB to LSB.',
        },
        {
          id: 'h2',
          text: 'Complexity: Time O(n·30), Space O(n·30)',
        },
      ],
    },
    {
      id: 'q46-gift-packing-maximise-value-across-k-boxes',
      title: 'Gift Packing — Maximise Value Across K Boxes',
      difficulty: 'hard',
      tags: ['dp', 'sliding-window'],
      problem:
        'You have n gifts in a line; nums[i] is the type of gift i. Pack them into exactly k non-empty consecutive boxes (contiguous subarrays that partition the array). The value of a box equals the number of distinct gift types inside it. Return the maximum total value summed across all k boxes.',
      examples: [
        'Input: nums = [1, 1, 2, 2, 3, 3], k = 3\nOutput: 5\nExplanation: One optimal packing is [1] | [1, 2, 2, 3] | [3] with distinct counts 1 + 3 + 1 = 5.',
        'Input: nums = [1, 2, 1, 2], k = 2\nOutput: 4\nExplanation: Split [1, 2] | [1, 2] → values 2 + 2 = 4.',
        'Input: nums = [1, 1, 1], k = 1\nOutput: 1\nExplanation: One box contains a single distinct type.',
      ],
      constraints: [
        '1 <= k <= n <= 350',
        '1 <= nums[i] <= n',
      ],
      hints: [
        {
          id: 'h1',
          text: 'DP with sliding window + HashMap. dp[k][i] = max value packing first i gifts into k boxes.',
        },
        {
          id: 'h2',
          text: 'Complexity: Time O(K·n) optimised, Space O(K·n)',
        },
      ],
    },
    {
      id: 'q47-heroes-vs-villains-battle',
      title: 'Heroes vs Villains Battle',
      difficulty: 'hard',
      tags: ['greedy', 'two-pointers'],
      problem:
        'There are n heroes and m villains on a number line. Hero i stands at heroes[i] and villain j at villains[j]. A hero at position h can defeat a villain at position v if |h − v| ≤ k. Each hero defeats at most one villain and each villain is defeated by at most one hero. Return the maximum number of villain–hero pairs you can form.',
      examples: [
        'Input: heroes = [1, 5, 9], villains = [3, 6, 11], k = 2\nOutput: 2\nExplanation: Pair hero 1 with villain 3 (|1−3|=2), and hero 5 with villain 6 (|5−6|=1). Hero 9 cannot reach 11 within k=2 after those assignments (or pair 9 with 11 and 5 with 6 — still 2).',
        'Input: heroes = [1, 2], villains = [10, 20], k = 1\nOutput: 0\nExplanation: No hero is within distance 1 of any villain.',
        'Input: heroes = [2, 4, 6], villains = [1, 3, 5, 7], k = 1\nOutput: 3\nExplanation: Match 2–1, 4–3, 6–5 (or similar) for three pairs.',
      ],
      constraints: [
        '1 <= n, m <= 10^5',
        '1 <= k <= 10^9',
        'heroes.length == n, villains.length == m',
        '1 <= heroes[i], villains[j] <= 10^9',
      ],
      hints: [
        {
          id: 'h1',
          text: 'Sort both arrays. Use two pointers — match earliest available hero with the nearest reachable villain.',
        },
        {
          id: 'h2',
          text: 'Complexity: Time O((N+M) log(N+M)), Space O(1)',
        },
      ],
    },
    {
      id: 'q48-ugliness-minimization',
      title: 'Ugliness Minimization',
      difficulty: 'hard',
      tags: ['greedy', 'bit-manipulation'],
      problem:
        'You are given a binary string s of length n representing an integer in binary (the leftmost character is the most significant bit). Its ugliness is the decimal value of that binary integer. You have a budget of cash coins and may perform these operations any number of times as long as the total cost ≤ cash:\n\n1. Swap the leftmost \'1\' with a \'0\' somewhere to its right — costs A coins per such swap.\n2. Flip any character (\'0\' ↔ \'1\') — costs B coins per flip.\n\nReturn the minimum achievable ugliness after operations.',
      examples: [
        'Input: s = "011111", cash = 7, A = 1, B = 3\nOutput: 7\nExplanation: One strategy yields binary "000111" = 7 within the budget.',
        'Input: s = "1", cash = 0, A = 1, B = 1\nOutput: 1\nExplanation: No operations possible; ugliness stays 1.',
        'Input: s = "10", cash = 1, A = 1, B = 5\nOutput: 1\nExplanation: Swap the leading 1 with the trailing 0 (cost A=1) to get "01" = 1.',
      ],
      constraints: [
        '1 <= n <= 10^5',
        's consists of \'0\' and \'1\' only.',
        '0 <= cash <= 10^18',
        '1 <= A, B <= 10^9',
      ],
      hints: [
        {
          id: 'h1',
          text: 'Greedy — minimise the most significant bits. Decide for each leading 1: cheaper to swap left or flip to 0 given remaining budget.',
        },
        {
          id: 'h2',
          text: 'Complexity: Time O(n²) worst, Space O(n)',
        },
      ],
    },
    {
      id: 'q49-road-terrain-transformation',
      title: 'Road Terrain Transformation',
      difficulty: 'hard',
      tags: ['binary-search', 'greedy'],
      problem:
        'You are given n road segments with terrain difficulties difficulties[i]. You may perform at most k operations; each operation reduces the difficulty of exactly one segment by 1 (a segment\'s difficulty cannot go below 0). After at most k operations, minimise the maximum difficulty among all segments. Return that minimum possible maximum difficulty.',
      examples: [
        'Input: difficulties = [3, 5, 2, 8, 4], k = 3\nOutput: 5\nExplanation: Reduce 8 → 5 using 3 operations. Maximum becomes 5.',
        'Input: difficulties = [1, 1, 1], k = 10\nOutput: 0\nExplanation: Enough operations to reduce every segment to 0.',
        'Input: difficulties = [10], k = 3\nOutput: 7\nExplanation: Only one segment; reduce it by 3.',
      ],
      constraints: [
        '1 <= n <= 10^5',
        '0 <= k <= 10^18',
        '0 <= difficulties[i] <= 10^9',
      ],
      hints: [
        {
          id: 'h1',
          text: 'Binary search on the answer (candidate maximum difficulty X). For each X, greedily compute total operations needed to bring all segments to ≤ X.',
        },
        {
          id: 'h2',
          text: 'Complexity: Time O(n log(max_diff)), Space O(1)',
        },
      ],
    },
    {
      id: 'q50-mountain-array-transformation',
      title: 'Mountain Array Transformation',
      difficulty: 'hard',
      tags: ['greedy', 'lis'],
      problem:
        'You may recall that an array arr is a mountain array if and only if:\n\n- arr.length >= 3\n- There exists some index i (0-indexed) with 0 < i < arr.length − 1 such that:\n  arr[0] < arr[1] < … < arr[i − 1] < arr[i] and\n  arr[i] > arr[i + 1] > … > arr[arr.length − 1]\n\nGiven an integer array nums, return the minimum number of elements to remove to make nums a mountain array. It is guaranteed that you can make a mountain array out of nums.',
      examples: [
        'Input: nums = [1, 3, 1]\nOutput: 0\nExplanation: The array itself is a mountain array so we do not need to remove any elements.',
        'Input: nums = [2, 1, 1, 5, 6, 2, 3, 1]\nOutput: 3\nExplanation: One solution is to remove the elements at indices 0, 1, and 5, making the array [1, 5, 6, 3, 1].',
        'Input: nums = [2, 1, 4, 5, 3]\nOutput: 1\nExplanation: Remove the first element to get [1, 4, 5, 3], which is a mountain array.',
      ],
      constraints: [
        '3 <= nums.length <= 1000',
        '1 <= nums[i] <= 10^9',
        'It is guaranteed that you can make a mountain array out of nums.',
      ],
      hints: [
        {
          id: 'h1',
          text: 'For each index i as the peak candidate, compute LIS ending at i from the left and LDS starting at i to the right. Min changes = N - max(LIS_left[i] + LDS_right[i] - 1).',
        },
        {
          id: 'h2',
          text: 'Complexity: Time O(n log n), Space O(n)',
        },
      ],
    },
  ],
}
