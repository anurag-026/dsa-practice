import type { Question } from '../types/question'

/**
 * Questions captured from screenshots.
 * Matched into Easy/Medium/Hard by title (see mergeScreenshots).
 */
export const screenshotQuestions: Question[] = [
  {
    id: 'longest-substring-without-repeating',
    title: 'Longest Substring Without Repeating Characters',
    difficulty: 'medium',
    tags: ['string', 'sliding-window', 'hash-map'],
    problem:
      'Given a string s, find the length of the longest substring without repeating characters. A substring is a contiguous sequence of characters within the string.',
    examples: [
      'Input: s = "abcabcbb"\nOutput: 3\nExplanation: The substring "abc" has length 3 and contains no repeating characters.',
      'Input: s = "bbbbb"\nOutput: 1\nExplanation: The substring "b" has length 1.',
      'Input: s = "pwwkew"\nOutput: 3\nExplanation: The substring "wke" has length 3. Note that "pwke" is a subsequence, not a substring.',
    ],
    constraints: [
      '0 <= s.length <= 5 * 10^4',
      's consists of English letters, digits, symbols and spaces.',
    ],
    hints: [
      {
        id: 'h1',
        text: 'Try a sliding window: expand right, and shrink left when a duplicate appears.',
      },
      {
        id: 'h2',
        text: 'Store the last seen index of each character so you can jump the left pointer past the previous occurrence.',
      },
    ],
    solution:
      'Use two pointers left and right, and a map from character → last index.\n\nWalk right from 0 to n-1. If s[right] was seen at index ≥ left, move left to that index + 1. Then update the map and track maxLen = max(maxLen, right - left + 1).\n\nWhy it works: the window [left, right] always has unique characters, and every possible end position is considered once.\n\nTime O(n), Space O(min(n, alphabet)).',
  },
  {
    id: 'subarray-sum-equals-k',
    title: 'Subarray Sum Equals K',
    difficulty: 'medium',
    tags: ['array', 'prefix-sum', 'hash-map'],
    problem:
      'Given an array of integers nums and an integer k, return the total number of contiguous subarrays whose sum equals k. A subarray is a contiguous non-empty sequence of elements within the array.',
    examples: [
      'Input: nums = [1,1,1], k = 2\nOutput: 2\nExplanation: Subarrays [1,1] (indices 0–1) and [1,1] (indices 1–2) both sum to 2.',
      'Input: nums = [1,2,3], k = 3\nOutput: 2\nExplanation: [1,2] and [3] both sum to 3.',
      'Input: nums = [1,-1,0], k = 0\nOutput: 3\nExplanation: [1,-1], [0], and [1,-1,0] all sum to 0.',
    ],
    constraints: [
      '1 <= nums.length <= 2 * 10^4',
      '-1000 <= nums[i] <= 1000',
      '-10^7 <= k <= 10^7',
    ],
    hints: [
      {
        id: 'h1',
        text: 'If prefix[j] − prefix[i] = k, then the subarray (i+1…j) sums to k.',
      },
      {
        id: 'h2',
        text: 'While scanning, count how many earlier prefixes equal currentSum − k using a hash map.',
      },
    ],
    solution:
      'Maintain a running prefix sum and a map of how many times each prefix value has appeared (start with {0: 1}).\n\nFor each num: sum += num; answer += map[sum − k] (if any); then map[sum]++.\n\nEach pair (earlier prefix, current prefix) with difference k corresponds to one valid subarray.\n\nTime O(n), Space O(n).',
  },
  {
    id: 'sliding-window-maximum',
    title: 'Sliding Window Maximum',
    difficulty: 'medium',
    tags: ['array', 'sliding-window', 'deque', 'monotonic-queue'],
    problem:
      'You are given an array of integers nums, and there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position. Return an array containing the maximum value in the window for each of its positions.',
    examples: [
      'Input: nums = [1,3,-1,-3,5,3,6,7], k = 3\nOutput: [3,3,5,5,6,7]',
      'Input: nums = [1], k = 1\nOutput: [1]',
      'Input: nums = [9,11], k = 2\nOutput: [11]',
    ],
    constraints: [
      '1 <= nums.length <= 10^5',
      '-10^4 <= nums[i] <= 10^4',
      '1 <= k <= nums.length',
    ],
    hints: [
      {
        id: 'h1',
        text: 'A brute force max in every window is O(nk). Can you keep candidates in decreasing order?',
      },
      {
        id: 'h2',
        text: 'Use a deque of indices: front is always the max of the current window.',
      },
    ],
    solution:
      'Maintain a monotonic decreasing deque of indices.\n\nFor each i: pop back while nums[back] ≤ nums[i]; push i; pop front if it is ≤ i−k (out of window). When i ≥ k−1, append nums[front] to the answer.\n\nThe front always stores the index of the maximum in the current window.\n\nTime O(n), Space O(k).',
  },
  {
    id: 'nearest-greater-element-to-the-right',
    title: 'Nearest Greater Element to the Right',
    difficulty: 'medium',
    tags: ['array', 'stack', 'monotonic-stack'],
    problem:
      'A weather app shows daily temperatures. For each day it needs the next warmer reading to the right — the first later day whose value is strictly greater.\n\nGiven an integer array arr, for every index i find the nearest element to the right of i that is strictly greater than arr[i]. Return an array result where result[i] is that element, or -1 if none exists.',
    examples: [
      'Input: arr = [4, 5, 2, 10, 8]\nOutput: [5, 10, 10, -1, -1]',
      'Input: arr = [3, 7, 1, 7, 8, 4]\nOutput: [7, 8, 7, 8, -1, -1]',
      'Input: arr = [9, 7, 5]\nOutput: [-1, -1, -1]',
    ],
    constraints: ['1 <= arr.length <= 3000', '1 <= arr[i] <= 10^9'],
    hints: [
      {
        id: 'h1',
        text: 'Scan from right to left so “the right side” is already processed.',
      },
      {
        id: 'h2',
        text: 'A monotonic decreasing stack of values (or indices) answers each query in amortized O(1).',
      },
    ],
    solution:
      'Scan from right to left with a stack that keeps candidates in increasing order from the top (or decreasing from bottom — keep values that could still be “next greater”).\n\nFor each arr[i]: while stack is not empty and top ≤ arr[i], pop. If stack empty → result[i] = -1, else result[i] = top. Then push arr[i].\n\nTime O(n), Space O(n).',
  },
  {
    id: 'merge-overlapping-intervals',
    title: 'Merge Overlapping Intervals',
    difficulty: 'medium',
    tags: ['array', 'sorting', 'intervals'],
    problem:
      'A conference hall keeps a booking list where each booking is a time range [start, end]. Some bookings overlap, and the manager wants a clean timetable.\n\nMerge every group of overlapping bookings into a single range. Two ranges overlap when they share at least one moment, so a range that ends exactly when the next one starts (for example [1, 4] and [4, 5]) is merged too.\n\nReturn the merged ranges sorted by start time. The input list is not necessarily sorted.',
    examples: [
      'Input: intervals = [[1, 3], [8, 10], [2, 6], [15, 18]]\nOutput: [[1, 6], [8, 10], [15, 18]]\nExplanation: [1, 3] and [2, 6] merge into [1, 6].',
      'Input: intervals = [[1, 4], [4, 5]]\nOutput: [[1, 5]]\nExplanation: They touch at 4, so merge.',
      'Input: intervals = [[5, 7], [1, 2], [3, 4]]\nOutput: [[1, 2], [3, 4], [5, 7]]',
    ],
    constraints: [
      '1 <= intervals.length <= 10^4',
      'intervals[i].length == 2',
      '0 <= start < end <= 10^8',
    ],
    hints: [
      {
        id: 'h1',
        text: 'Sort by start time first — then overlaps can only happen with the last merged interval.',
      },
      {
        id: 'h2',
        text: 'If current.start ≤ last.end, extend last.end; otherwise push a new interval.',
      },
    ],
    solution:
      'Sort intervals by start. Initialise result with the first interval.\n\nFor each next interval: if it overlaps or touches the last in result (start ≤ lastEnd), set lastEnd = max(lastEnd, end). Otherwise append it.\n\nTime O(n log n), Space O(n).',
  },
  {
    id: 'andys-vacation-maximum-happiness',
    title: "Andy's Vacation: Maximum Happiness",
    difficulty: 'medium',
    tags: ['dynamic-programming'],
    problem:
      'Andy has n days in a row where he can take a day off. Day i has happiness joy[i]. He follows two rules:\n1) He never takes two days off in a row (at least one working day between days off).\n2) He can take at most k days off in total.\n\nReturn the maximum total happiness Andy can collect.',
    examples: [
      'Input: joy = [4, 7, 5, 9, 2], k = 2\nOutput: 16\nExplanation: Days with 7 and 9 (non-adjacent) sum to 16.',
      'Input: joy = [3, 10, 4], k = 3\nOutput: 10\nExplanation: Cannot take three consecutive offs; best is the middle day 10.',
      'Input: joy = [6, 1, 6, 1, 6], k = 2\nOutput: 12',
    ],
    constraints: [
      '1 <= joy.length <= 1000',
      '1 <= joy[i] <= 10^4',
      '1 <= k <= joy.length',
    ],
    hints: [
      {
        id: 'h1',
        text: 'This is like House Robber, but you also track how many days off you have used (≤ k).',
      },
      {
        id: 'h2',
        text: 'DP state: day index + number of offs taken so far.',
      },
    ],
    solution:
      'Let dp[i][j] be the best happiness using the first i days with exactly j days off.\n\nTransitions:\n- Skip day i: dp[i][j] = dp[i-1][j]\n- Take day i (if j ≥ 1): dp[i][j] = joy[i-1] + dp[i-2][j-1] (or just joy if i=1)\n\nAnswer = max over j ≤ k of dp[n][j].\n\nTime O(n·k), Space O(n·k) (or O(k) with rolling arrays).',
  },
  {
    id: 'minimum-platforms-required',
    title: 'Minimum Platforms Required',
    difficulty: 'medium',
    tags: ['greedy', 'sorting', 'two-pointers'],
    problem:
      'A railway station has limited platforms. You are given two arrays of length n: arrival[i] and departure[i] for the i-th train (arrival[i] ≤ departure[i]). Times are plain integers with no midnight wrap.\n\nA train occupies a platform from arrival to departure, both inclusive — if one train departs at t and another arrives at t, they need two platforms.\n\nReturn the minimum number of platforms so that no train waits.',
    examples: [
      'Input: arrival = [900, 940, 950, 1100, 1500, 1800], departure = [910, 1200, 1120, 1130, 1900, 2000]\nOutput: 3',
      'Input: arrival = [100, 200, 300], departure = [150, 250, 350]\nOutput: 1',
      'Input: arrival = [100, 200], departure = [200, 300]\nOutput: 2\nExplanation: Departure and arrival at the same time both need a platform.',
    ],
    constraints: [
      '1 <= n <= 10^5',
      '0 <= arrival[i] <= departure[i] <= 10^9',
    ],
    hints: [
      {
        id: 'h1',
        text: 'Sort arrivals and departures separately, then sweep with two pointers.',
      },
      {
        id: 'h2',
        text: 'On arrival, need +1 platform; on departure, free one. Track the peak.',
      },
    ],
    solution:
      'Sort arrival and departure arrays.\n\ni = j = 0, platforms = 0, maxPlat = 0.\nWhile i < n: if arrival[i] ≤ departure[j], platforms++, maxPlat = max(...), i++. Else platforms--, j++.\n\nUsing ≤ handles the inclusive-overlap rule at equal times.\n\nTime O(n log n), Space O(1) extra (besides sort).',
  },
  {
    id: 'starting-node-of-cycle-linked-list',
    title: 'Starting Node of Cycle in a Linked List',
    difficulty: 'medium',
    tags: ['linked-list', 'two-pointers', 'floyd'],
    problem:
      'Given the head of a linked list, return the 0-indexed position of the node where the cycle begins. If there is no cycle, return -1.\n\nThere is a cycle if some node can be reached again by following next. Internally pos denotes the index the tail connects to; pos is not passed as a parameter — return the index of the cycle start.',
    examples: [
      'Input: head = [3,2,0,-4], pos = 1\nOutput: 1\nExplanation: Cycle begins at index 1 (value 2).',
      'Input: head = [1,2], pos = 0\nOutput: 0',
      'Input: head = [1], pos = -1\nOutput: -1',
    ],
    constraints: [
      'The number of nodes is in [0, 10^4].',
      '-10^5 <= Node.val <= 10^5',
      'pos is -1 or a valid index.',
    ],
    hints: [
      {
        id: 'h1',
        text: 'First detect a cycle with slow/fast pointers (Floyd).',
      },
      {
        id: 'h2',
        text: 'After they meet, move one pointer to head; advance both one step at a time — they meet at the cycle entrance.',
      },
    ],
    solution:
      'Phase 1: slow = fast = head. Move slow by 1, fast by 2 until they meet (or fast hits null → no cycle, return -1).\n\nPhase 2: put one pointer back at head. Move both one step until they meet — that node is the cycle start. Walk from head counting indices to return the index.\n\nMath: if μ is start distance and λ cycle length, meeting implies the second phase lands on μ.\n\nTime O(n), Space O(1).',
  },
  {
    id: 'coin-change-minimum-coins',
    title: 'Coin Change (Minimum Coins)',
    difficulty: 'medium',
    tags: ['dynamic-programming', 'unbounded-knapsack'],
    problem:
      'A cashier has an unlimited supply of coins of several denominations. The array coins lists the available coin values (all unique). amount is the total to make.\n\nReturn the fewest number of coins that add up to exactly amount. If it is impossible, return -1.',
    examples: [
      'Input: coins = [1, 2, 5], amount = 11\nOutput: 3\nExplanation: 5 + 5 + 1 = 11 uses 3 coins.',
      'Input: coins = [2], amount = 3\nOutput: -1',
      'Input: coins = [1, 5, 6, 9], amount = 11\nOutput: 2\nExplanation: 5 + 6 = 11.',
    ],
    constraints: [
      '1 <= coins.length <= 100',
      '1 <= coins[i] <= 10^4 (all distinct)',
      '1 <= amount <= 10^4',
    ],
    hints: [
      {
        id: 'h1',
        text: 'Greedy (largest coin first) fails on some inputs — use DP.',
      },
      {
        id: 'h2',
        text: 'dp[x] = minimum coins to make sum x; try every coin that fits.',
      },
    ],
    solution:
      'Let dp[0] = 0 and dp[x] = ∞ for x > 0.\nFor amount a from 1…amount, for each coin c ≤ a: dp[a] = min(dp[a], dp[a − c] + 1).\n\nIf dp[amount] is still ∞, return -1; else return it.\n\nTime O(amount × |coins|), Space O(amount).',
  },
  {
    id: 'zero-one-knapsack',
    title: '0/1 Knapsack',
    difficulty: 'medium',
    tags: ['dynamic-programming', 'knapsack'],
    problem:
      'A hiker is packing a backpack. There are n items. weights[i] is the weight of item i and values[i] is its usefulness. The backpack holds at most W kilograms.\n\nEach item can be taken once or left behind (no fractions, no duplicates). Return the largest total value that fits under weight W.',
    examples: [
      'Input: n = 4, W = 7, weights = [1, 3, 4, 5], values = [1, 4, 5, 7]\nOutput: 9\nExplanation: Items with weights 3 and 4 give value 4 + 5 = 9.',
      'Input: n = 2, W = 5, weights = [2, 3], values = [4, 5]\nOutput: 9',
      'Input: n = 1, W = 3, weights = [5], values = [10]\nOutput: 0',
    ],
    constraints: [
      '1 <= n <= 500',
      '1 <= W <= 1000',
      'weights.length == values.length == n',
      '1 <= weights[i] <= 1000',
      '1 <= values[i] <= 10^4',
      'Each item at most once.',
    ],
    hints: [
      {
        id: 'h1',
        text: 'For each item, decide: skip it, or take it if weight allows.',
      },
      {
        id: 'h2',
        text: 'dp[i][w] = best value using first i items with capacity w.',
      },
    ],
    solution:
      'dp[i][w] = max(dp[i-1][w],  values[i-1] + dp[i-1][w - weights[i-1]] if weights[i-1] ≤ w).\n\nFill i from 1…n and w from 0…W. Answer is dp[n][W].\n\nCan compress to 1D by iterating w from W down to weights[i].\n\nTime O(n·W), Space O(n·W) or O(W).',
  },
  {
    id: 'word-break-minimum-words',
    title: 'Word Break (Minimum Words)',
    difficulty: 'medium',
    tags: ['dynamic-programming', 'string', 'bfs'],
    problem:
      'A keyboard app checks whether typed text without spaces can be split into dictionary words. You are given a string s of lowercase letters and a string words containing dictionary words separated by single spaces. Each dictionary word may be used any number of times.\n\nSplit s into a sequence of dictionary words that concatenate to exactly s. Return the smallest number of words needed, or -1 if impossible.',
    examples: [
      'Input: s = "leetcode", words = "leet code"\nOutput: 2\nExplanation: leet + code.',
      'Input: s = "applepenapple", words = "apple pen"\nOutput: 3\nExplanation: apple + pen + apple.',
      'Input: s = "catsanddog", words = "cats dog sand and cat"\nOutput: -1',
    ],
    constraints: [
      '1 <= s.length <= 1000',
      'words has 1..1000 distinct lowercase words (length 1..20) separated by spaces.',
      's consists of lowercase English letters.',
    ],
    hints: [
      {
        id: 'h1',
        text: 'dp[i] = fewest words to build the prefix s[0..i).',
      },
      {
        id: 'h2',
        text: 'From each reachable i, try every dictionary word that matches s starting at i.',
      },
    ],
    solution:
      'Parse words into a set. Let dp[0] = 0 and dp[i] = ∞ for i > 0.\nFor each start i with finite dp[i], for each word w: if s.startsWith(w, i), update dp[i+|w|] = min(..., dp[i]+1).\n\nAlternatively BFS on indices for shortest path (each edge = one word).\n\nAnswer dp[n] or -1 if infinite.\n\nTime O(n²) typical, Space O(n).',
  },
  {
    id: 'longest-common-subsequence',
    title: 'Longest Common Subsequence',
    difficulty: 'medium',
    tags: ['dynamic-programming', 'string'],
    problem:
      'Two DNA strands are written as lowercase strings text1 and text2. A subsequence is formed by deleting zero or more characters without changing order of the rest (e.g. "ace" is a subsequence of "abcde").\n\nReturn the length of the longest common subsequence of the two strings. If they share none, return 0.',
    examples: [
      'Input: text1 = "abcde", text2 = "ace"\nOutput: 3\nExplanation: LCS is "ace".',
      'Input: text1 = "abc", text2 = "abc"\nOutput: 3',
      'Input: text1 = "abc", text2 = "def"\nOutput: 0',
    ],
    constraints: [
      '1 <= text1.length, text2.length <= 1000',
      'text1 and text2 consist of lowercase English letters.',
    ],
    hints: [
      {
        id: 'h1',
        text: 'Compare the last characters of prefixes of both strings.',
      },
      {
        id: 'h2',
        text: 'If equal, LCS grows by 1 from the shorter prefixes; else take the max of skipping either side.',
      },
    ],
    solution:
      'dp[i][j] = LCS length of text1[0..i) and text2[0..j).\nIf text1[i-1] == text2[j-1]: dp[i][j] = dp[i-1][j-1] + 1\nElse: dp[i][j] = max(dp[i-1][j], dp[i][j-1])\n\nAnswer dp[m][n].\n\nTime O(m·n), Space O(m·n) or O(min(m,n)) with rolling rows.',
  },
  {
    id: 'longest-increasing-subsequence',
    title: 'Longest Increasing Subsequence',
    difficulty: 'medium',
    tags: ['dynamic-programming', 'binary-search', 'patience-sorting'],
    problem:
      'A fitness app records daily weight in nums. The coach wants the longest period of steady improvement, ignoring bad days.\n\nFind the length of the longest strictly increasing subsequence of nums. A subsequence keeps order but may skip elements; strictly increasing means each chosen value is larger than the previous.',
    examples: [
      'Input: nums = [10, 9, 2, 5, 3, 7, 101, 18]\nOutput: 4\nExplanation: e.g. [2, 3, 7, 18] or [2, 5, 7, 101].',
      'Input: nums = [0, 1, 0, 3, 2, 3]\nOutput: 4',
      'Input: nums = [7, 7, 7, 7]\nOutput: 1',
    ],
    constraints: [
      '1 <= nums.length <= 10^5',
      '-10^9 <= nums[i] <= 10^9',
    ],
    hints: [
      {
        id: 'h1',
        text: 'O(n²) DP: dp[i] = 1 + max(dp[j]) for j < i with nums[j] < nums[i].',
      },
      {
        id: 'h2',
        text: 'Faster: keep a tails array; binary-search the place to extend or replace.',
      },
    ],
    solution:
      'Patience sorting: tails[len] = smallest tail of all increasing subsequences of length len+1.\n\nFor each num, binary-search the first tails value ≥ num and replace it (or append). The length of tails is the LIS length.\n\nTime O(n log n), Space O(n).',
  },
  {
    id: 'number-of-islands',
    title: 'Number of Islands',
    difficulty: 'medium',
    tags: ['graph', 'dfs', 'bfs', 'matrix'],
    problem:
      'A satellite photo is a grid with m rows and n columns. Each cell is 1 (land) or 0 (water). An island is a group of land cells connected horizontally or vertically (not diagonally). Cells outside the grid count as water.\n\nReturn the number of islands in the grid.',
    examples: [
      'Input: grid = [[1,1,0,0],[1,0,0,1],[0,0,1,1]]\nOutput: 2',
      'Input: grid = [[1,0,1],[0,1,0],[1,0,1]]\nOutput: 5\nExplanation: Diagonal touches do not connect.',
      'Input: grid = [[0,0],[0,0]]\nOutput: 0',
    ],
    constraints: ['1 <= m, n <= 150', 'grid[i][j] is 0 or 1'],
    hints: [
      {
        id: 'h1',
        text: 'Scan every cell; when you find a 1, you have discovered a new island.',
      },
      {
        id: 'h2',
        text: 'Flood-fill (DFS/BFS) that island so you do not count it again.',
      },
    ],
    solution:
      'Iterate all cells. On grid[r][c] == 1: islands++, then DFS/BFS marking every connected 1 as visited (set to 0 or use a visited set).\n\nEach flood fill explores one connected component.\n\nTime O(m·n), Space O(m·n) worst-case recursion/queue.',
  },
  {
    id: 'combination-sum',
    title: 'Combination Sum',
    difficulty: 'medium',
    tags: ['backtracking', 'recursion'],
    problem:
      'A coffee shop sells cups in several sizes given by nums (distinct positive milliliters). A customer wants exactly target milliliters; any size may be bought any number of times.\n\nFind all different combinations of sizes that sum to target. Order inside a combination does not matter ([2,3] same as [3,2]). Write each combination in non-decreasing order and return combinations in lexicographical order. If none, return [].',
    examples: [
      'Input: nums = [2, 3, 6, 7], target = 7\nOutput: [[2, 2, 3], [7]]',
      'Input: nums = [2, 3, 5], target = 8\nOutput: [[2, 2, 2, 2], [2, 3, 3], [3, 5]]',
      'Input: nums = [4, 6], target = 5\nOutput: []',
    ],
    constraints: [
      '1 <= nums.length <= 20',
      '1 <= nums[i] <= 30 (all distinct)',
      '1 <= target <= 50',
      'Number of valid combinations < 150.',
    ],
    hints: [
      {
        id: 'h1',
        text: 'Sort nums first so results come out non-decreasing / lexicographical.',
      },
      {
        id: 'h2',
        text: 'Backtrack: at index i you may reuse nums[i], then move to i+1 for the next distinct choice.',
      },
    ],
    solution:
      'Sort nums. DFS(start, remain, path):\n- if remain == 0: record path\n- if remain < 0: return\n- for i from start…n-1: append nums[i], recurse with i (reuse allowed), pop.\n\nStarting from i (not 0) avoids permutations of the same multiset.\n\nTime exponential in target; Space O(target) recursion depth.',
  },
  {
    id: 'subset-sum',
    title: 'Subset Sum',
    difficulty: 'medium',
    tags: ['dynamic-programming', 'knapsack'],
    problem:
      'A food-delivery driver has order weights in nums. The van must carry exactly target kilograms; each order is taken wholly or left (at most once).\n\nReturn true if some subset sums to exactly target (empty subset sums to 0), else false.',
    examples: [
      'Input: nums = [3, 34, 4, 12, 5, 2], target = 9\nOutput: true\nExplanation: 4 + 5 = 9.',
      'Input: nums = [3, 34, 4, 12, 5, 2], target = 30\nOutput: false',
      'Input: nums = [1, 2, 3], target = 7\nOutput: false',
      'Input: nums = [0, 0, 0], target = 0\nOutput: true',
    ],
    constraints: [
      '1 <= nums.length <= 100',
      '0 <= nums[i] <= 100',
      '0 <= target <= 5000',
      'Each element at most once.',
    ],
    hints: [
      {
        id: 'h1',
        text: 'Classic 0/1 knapsack feasibility: can we make sum j using a prefix of the array?',
      },
      {
        id: 'h2',
        text: 'Boolean DP over achievable sums; update from high to low if using 1D.',
      },
    ],
    solution:
      'Boolean array can[0..target], can[0] = true.\nFor each num, for j = target down to num: can[j] = can[j] || can[j − num].\n\nReturn can[target].\n\nTime O(n·target), Space O(target).',
  },
  {
    id: 'minimum-base-identical-digits',
    title: 'Minimum Base with Identical Digits',
    difficulty: 'medium',
    tags: ['math', 'binary-search', 'number-theory'],
    problem:
      'You are given an integer n. When n is written in some base b (2 ≤ b ≤ n − 1), it becomes a string of digits. A base is good if all digits of n in that base are the same. Example: 13 in base 3 is 111, so base 3 is good for 13.\n\nReturn the smallest good base for n. A good base always exists for n ≥ 3 because in base n − 1 the number is written as 11.',
    examples: [
      'Input: n = 13\nOutput: 3\nExplanation: Base 3 gives 111.',
      'Input: n = 8\nOutput: 3\nExplanation: Base 3 gives 22.',
      'Input: n = 11\nOutput: 10\nExplanation: Prime; fall back to n − 1 → "11".',
    ],
    constraints: ['3 <= n <= 10^9'],
    hints: [
      {
        id: 'h1',
        text: 'If all digits equal d, then n = d * (b^{k-1} + … + 1) with 1 ≤ d < b.',
      },
      {
        id: 'h2',
        text: 'Try possible lengths k from large to small; for each k solve for b (binary search / formula).',
      },
    ],
    solution:
      'For length k ≥ 2, n = d * (b^k − 1) / (b − 1) with 1 ≤ d < b. Special case d = 1 gives the classic “all ones” good bases.\n\nEnumerate k from ~log2(n) down to 2. For each k, binary-search b in [2, n-1] (or solve for the all-ones case b^{k}-1)/(b-1) = n). Keep the smallest valid b. Default answer n − 1.\n\nTime roughly O(log n · log n · k checks), Space O(1).',
  },
  {
    id: 'three-sum',
    title: '3Sum',
    difficulty: 'medium',
    tags: ['array', 'two-pointers', 'sorting'],
    problem:
      'Given an integer array nums, return all unique triplets [nums[a], nums[b], nums[c]] such that a, b, and c are distinct indices and the three values sum to 0. The result must not contain duplicate triplets; return triplets in sorted order (each triplet sorted, and the list sorted).',
    examples: [
      'Input: nums = [-1, 0, 1, 2, -1, -4]\nOutput: [[-1, -1, 2], [-1, 0, 1]]',
      'Input: nums = [0, 1, 1]\nOutput: []',
      'Input: nums = [0, 0, 0]\nOutput: [[0, 0, 0]]',
    ],
    constraints: [
      '3 <= nums.length <= 3000',
      '-10^5 <= nums[i] <= 10^5',
    ],
    hints: [
      {
        id: 'h1',
        text: 'Sort first. Fix one number, then two-sum the rest to 0.',
      },
      {
        id: 'h2',
        text: 'Skip duplicate values for the fixed index and for both pointers to avoid repeated triplets.',
      },
    ],
    solution:
      'Sort nums. For i = 0…n-3: if i > 0 and nums[i] == nums[i-1] continue. Two pointers L = i+1, R = n-1 aiming for −nums[i].\n\nIf sum too small, L++; too big, R--; equal → record and skip duplicates on L/R.\n\nTime O(n²), Space O(1) extra besides output.',
  },
  {
    id: 'dijkstra-shortest-path',
    title: 'Dijkstra Shortest Path',
    difficulty: 'medium',
    tags: ['graph', 'shortest-path', 'dijkstra', 'heap'],
    problem:
      'A delivery company has n warehouses numbered 0 to n − 1. edges lists roads: each [u, v, w] connects u and v in both directions and takes w minutes.\n\nA truck starts at warehouse 0 and wants warehouse n − 1 as fast as possible. Return the minimum total time, or -1 if unreachable.\n\nThere may be multiple roads between the same pair, and a road may join a warehouse to itself.',
    examples: [
      'Input: edges = [[0,1,4],[0,2,1],[2,1,2],[1,3,1],[2,3,5]], n = 4\nOutput: 4\nExplanation: 0 → 2 → 1 → 3 costs 1+2+1 = 4.',
      'Input: edges = [[0,1,5]], n = 3\nOutput: -1',
      'Input: edges = [[0,1,7]], n = 2\nOutput: 7',
    ],
    constraints: [
      '2 <= n <= 10^4',
      '0 <= edges.length <= 2 * 10^4',
      'edges[i] = [u, v, w] with 0 <= u, v < n and 1 <= w <= 10^4',
    ],
    hints: [
      {
        id: 'h1',
        text: 'Build an undirected weighted adjacency list, then run Dijkstra from 0.',
      },
      {
        id: 'h2',
        text: 'Use a min-heap of (distance, node); skip stale heap entries.',
      },
    ],
    solution:
      'Build adj list. dist[0] = 0, others ∞. Push (0, 0) into a min-heap.\nWhile heap not empty: pop (d, u); if d > dist[u] continue; for each (v, w): if dist[u]+w < dist[v], update and push.\n\nReturn dist[n-1] if finite else -1.\n\nTime O((n + m) log n), Space O(n + m).',
  },
  {
    id: 'koko-eating-bananas',
    title: 'Koko Eating Bananas',
    difficulty: 'medium',
    tags: ['binary-search', 'binary-search-on-answer'],
    problem:
      'Koko loves bananas. piles[i] is the number of bananas in the i-th pile. Guards return in h hours.\n\nKoko chooses eating speed k (bananas/hour). Each hour she picks one pile and eats k bananas from it (or the whole pile if smaller) and does not start another pile that hour.\n\nReturn the minimum integer speed k such that she finishes all bananas within h hours.',
    examples: [
      'Input: piles = [3, 6, 7, 11], h = 8\nOutput: 4',
      'Input: piles = [30, 11, 23, 4, 20], h = 5\nOutput: 30',
      'Input: piles = [30, 11, 23, 4, 20], h = 6\nOutput: 23',
    ],
    constraints: [
      '1 <= piles.length <= 10^4',
      'piles.length <= h <= 10^9',
      '1 <= piles[i] <= 10^9',
    ],
    hints: [
      {
        id: 'h1',
        text: 'Hours needed is monotone in k: faster never hurts. Binary-search k.',
      },
      {
        id: 'h2',
        text: 'For a candidate k, hours = sum over piles of ceil(pile / k).',
      },
    ],
    solution:
      'Binary search k in [1, max(piles)]. For mid, compute hours = Σ ceil(p / mid). If hours ≤ h, try smaller (hi = mid); else lo = mid + 1.\n\nAnswer is lo after the search.\n\nTime O(n log max_pile), Space O(1).',
  },
  {
    id: 'lowest-common-ancestor-bst',
    title: 'Lowest Common Ancestor of a BST',
    difficulty: 'medium',
    tags: ['tree', 'bst', 'binary-search-tree'],
    problem:
      'Given the root of a binary search tree (BST) and two nodes p and q that exist in the tree, return their lowest common ancestor (LCA).\n\nThe LCA is the deepest node that has both p and q as descendants (a node may be a descendant of itself).',
    examples: [
      'Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8\nOutput: 6\nExplanation: 2 is left of 6, 8 is right of 6.',
      'Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4\nOutput: 2\nExplanation: A node can be an ancestor of itself.',
    ],
    constraints: [
      'Number of nodes in [2, 10^5].',
      '-10^9 <= Node.val <= 10^9',
      'All Node.val are unique.',
      'p and q both exist; p != q.',
    ],
    hints: [
      {
        id: 'h1',
        text: 'Use BST order: both smaller → go left; both larger → go right; otherwise current is split point.',
      },
    ],
    solution:
      'Start at root. While true:\n- if p.val and q.val are both < node.val → node = node.left\n- else if both > node.val → node = node.right\n- else return node (split or one equals node)\n\nWorks iteratively or recursively.\n\nTime O(h), Space O(1) iterative.',
  },
  {
    id: 'single-number-ii',
    title: 'Single Number II',
    difficulty: 'medium',
    tags: ['bit-manipulation', 'hash-map'],
    problem:
      'Given an integer array nums where every element appears three times except for one, which appears exactly once. Find that single element and return it.',
    examples: [
      'Input: nums = [2,2,3,2]\nOutput: 3',
      'Input: nums = [0,1,0,1,0,1,99]\nOutput: 99',
      'Input: nums = [-2,-2,-2,1,1,1,-3,-3,-3,-4]\nOutput: -4',
    ],
    constraints: [
      '1 <= nums.length <= 3 * 10^4',
      '-2^31 <= nums[i] <= 2^31 - 1',
      'Every element appears three times except one that appears once.',
    ],
    hints: [
      {
        id: 'h1',
        text: 'A hash map of frequencies works, but bit tricks give O(1) extra space.',
      },
      {
        id: 'h2',
        text: 'Track bits seen once and twice; a third occurrence clears both.',
      },
    ],
    solution:
      'Bitmask approach with ones and twos:\nfor each num:\n  ones = (ones ^ num) & ~twos\n  twos = (twos ^ num) & ~ones\nReturn ones.\n\nOnes holds bits that appeared mod 3 == 1; twos holds mod 3 == 2.\n\nTime O(n), Space O(1).',
  },
  {
    id: 'maximum-xor-of-a-subset',
    title: 'Maximum XOR of a Subset',
    difficulty: 'hard',
    tags: ['bit-manipulation', 'linear-basis', 'xor'],
    problem:
      'A mixing board has 8 switches. Effect cards are numbers in nums. If bit j of a card is 1, plugging it toggles switch j. All switches start off. Power level is the binary number formed by the switches (switch j worth 2^j).\n\nYou may plug in at most floor(n / 2) cards (or none). Return the largest power level reachable.',
    examples: [
      'Input: nums = [3, 5, 6, 9]\nOutput: 15\nExplanation: At most 2 cards; 6 ^ 9 = 15.',
      'Input: nums = [7]\nOutput: 0\nExplanation: floor(1/2)=0 cards allowed.',
      'Input: nums = [5,5,5,5,5,5]\nOutput: 5',
    ],
    constraints: [
      '1 <= nums.length <= 100',
      '0 <= nums[i] <= 255',
    ],
    hints: [
      {
        id: 'h1',
        text: 'XOR of a subset is a linear combination over GF(2). Think linear basis.',
      },
      {
        id: 'h2',
        text: 'With 8-bit values, you can also DP over subsets / knapsack on count of cards.',
      },
    ],
    solution:
      'Because values are ≤ 255, DP works well: for c = 0…floor(n/2), track reachable XOR masks with exactly c cards (bitset/boolean DP).\n\nAlternatively build a Gaussian XOR basis and search combinations with size ≤ n/2 (small n).\n\nAnswer is the maximum reachable XOR under the size cap.\n\nTime O(n · (n/2) · 256) for DP, Space O(n · 256).',
  },
  {
    id: 'xor-sum-maximisation',
    title: 'Xor-Sum Maximisation',
    difficulty: 'hard',
    tags: ['bit-manipulation', 'greedy'],
    problem:
      'A quiz show uses a secret code x. nums holds answer-sheet numbers. The round score is the sum of (x XOR nums[i]) over all i.\n\nThe host may choose any integer x with 0 ≤ x ≤ k. Return the largest score possible.',
    examples: [
      'Input: nums = [1, 2, 3], k = 3\nOutput: 6\nExplanation: Best is x = 0 → sum 6.',
      'Input: nums = [5, 5], k = 10\nOutput: 30\nExplanation: x = 10 → each 5 becomes 15; 15+15=30.',
      'Input: nums = [1, 8, 8], k = 7\nOutput: 36',
    ],
    constraints: [
      '1 <= nums.length <= 3000',
      '0 <= nums[i] <= 5 * 10^5',
      '0 <= k <= 5 * 10^5',
    ],
    hints: [
      {
        id: 'h1',
        text: 'XOR sum separates by bit: for each bit, decide 0/1 in x independently if constraints allow.',
      },
      {
        id: 'h2',
        text: 'Build x from MSB to LSB, setting a bit when it increases the sum and x stays ≤ k.',
      },
    ],
    solution:
      'For each bit b, if x has that bit set, contribution is (#nums with bit 0)×2^b; if unset, (# with bit 1)×2^b.\n\nGreedily construct x from high bit to low: tentatively set the bit if (x | bit) ≤ k and that choice yields a better or equal sum contribution; otherwise leave it unset.\n\nFinally evaluate the sum for the chosen x (or compute while building).\n\nTime O(n · B) with B ≈ 20, Space O(1) extra.',
  },
]

/** Map screenshot titles → existing data titles when names differ. */
export const titleAliases: Record<string, string[]> = {
  'Longest Substring Without Repeating Characters': [
    'Longest Substring Without Repeating Characters',
  ],
  'Merge Overlapping Intervals': ['Merge Intervals', 'Merge Overlapping Intervals'],
  'Longest Increasing Subsequence': [
    'Longest Increasing Subsequence (LIS)',
    'Longest Increasing Subsequence',
  ],
  'Combination Sum': [
    'Combination Sum (Unique Combinations)',
    'Combination Sum',
  ],
  'Subset Sum': ['Subset Sum Problem', 'Subset Sum'],
  'Word Break (Minimum Words)': ['Word Break Problem', 'Word Break (Minimum Words)'],
  'Coin Change (Minimum Coins)': [
    'Coin Change — Minimum Number of Coins',
    'Coin Change (Minimum Coins)',
  ],
  '0/1 Knapsack': ['0/1 Knapsack Problem', '0/1 Knapsack'],
  'Maximum XOR of a Subset': [
    'Maximum XOR Subset with at Most N/2 Elements',
    'Maximum XOR of a Subset',
  ],
  'Xor-Sum Maximisation': ['Xor-Sum Maximization', 'Xor-Sum Maximisation'],
}
