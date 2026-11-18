import type { Topic } from '../../types/question'

export const mediumTopic: Topic = {
  id: 'medium',
  name: 'Medium',
  description: 'Greedy, sliding window, DP intro, trees, stack, and design.',
  questions: [
    {
      id: 'q21-longest-substring-without-repeating-characters',
      title: 'Longest Substring Without Repeating Characters',
      difficulty: 'medium',
      tags: ['string', 'sliding-window'],
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
          text: 'Sliding window + HashMap. Move right pointer; if duplicate found, move left pointer past the previous occurrence.',
        },
        {
          id: 'h2',
          text: 'Complexity: Time O(n), Space O(min(n, alphabet))',
        },
      ],
    },
    {
      id: 'q22-next-permutation',
      title: 'Next Permutation',
      difficulty: 'medium',
      tags: ['array', 'greedy'],
      problem:
        'A permutation of an array of integers is an arrangement of its members into a sequence or linear order.\n\nThe next permutation of an array of integers is the next lexicographically greater permutation of its integer. More formally, if all the permutations of the array are sorted in one container according to their lexicographical order, then the next permutation of that array is the permutation that follows it in the sorted container. If such arrangement is not possible, the array must be rearranged as the lowest possible order (i.e., sorted in ascending order).\n\nGiven an array of integers nums, find the next permutation of nums. The replacement must be in place and use only constant extra memory.',
      examples: [
        'Input: nums = [1, 2, 3]\nOutput: [1, 3, 2]',
        'Input: nums = [3, 2, 1]\nOutput: [1, 2, 3]',
        'Input: nums = [1, 1, 5]\nOutput: [1, 5, 1]',
      ],
      constraints: ['1 <= nums.length <= 100', '0 <= nums[i] <= 100'],
      hints: [
        {
          id: 'h1',
          text: 'Find rightmost index i where A[i] < A[i+1]. Swap A[i] with the smallest element greater than it to the right. Reverse the suffix from i+1 onward.',
        },
        {
          id: 'h2',
          text: 'Complexity: Time O(n), Space O(1)',
        },
      ],
    },
    {
      id: 'q23-detect-a-loop-in-a-linked-list',
      title: 'Detect a Loop in a Linked List',
      difficulty: 'medium',
      tags: ['linked-list', 'two-pointers'],
      problem:
        'Given head, the head of a linked list, determine if the linked list has a cycle in it. There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail\'s next pointer is connected to. Note that pos is not passed as a parameter. Return true if there is a cycle in the linked list. Otherwise, return false.',
      examples: [
        'Input: head = [3, 2, 0, -4], pos = 1\nOutput: true\nExplanation: There is a cycle where the tail connects to the 1st node (0-indexed).',
        'Input: head = [1, 2], pos = 0\nOutput: true\nExplanation: There is a cycle where the tail connects to the 0th node.',
        'Input: head = [1], pos = -1\nOutput: false\nExplanation: There is no cycle in the linked list.',
      ],
      constraints: [
        'The number of the nodes in the list is in the range [0, 10^4].',
        '-10^5 <= Node.val <= 10^5',
        'pos is -1 or a valid index in the linked-list.',
      ],
      hints: [
        {
          id: 'h1',
          text: "Floyd's Cycle Detection — use two pointers (slow moves 1 step, fast moves 2). If they meet, a cycle exists.",
        },
        {
          id: 'h2',
          text: 'Complexity: Time O(n), Space O(1)',
        },
      ],
    },
    {
      id: 'q24-maximum-product-subarray',
      title: 'Maximum Product Subarray',
      difficulty: 'medium',
      tags: ['array', 'dp'],
      problem:
        'Given an integer array nums, find a subarray that has the largest product, and return the product. The test cases are generated so that the answer will fit in a 32-bit integer. Note that the product of an array with a single element is the value of that element.',
      examples: [
        'Input: nums = [2, 3, -2, 4]\nOutput: 6\nExplanation: [2, 3] has the largest product 6.',
        'Input: nums = [-2, 0, -1]\nOutput: 0\nExplanation: The result cannot be 2, because [-2, -1] is not a subarray.',
        'Input: nums = [-2, 3, -4]\nOutput: 24\nExplanation: The subarray [-2, 3, -4] has product 24.',
      ],
      constraints: [
        '1 <= nums.length <= 2 * 10^4',
        '-10 <= nums[i] <= 10',
        'The product of any subarray of nums is guaranteed to fit in a 32-bit integer.',
      ],
      hints: [
        {
          id: 'h1',
          text: 'Track both max and min product at each position (min can turn max after multiplying a negative). Update global max each step.',
        },
        {
          id: 'h2',
          text: 'Complexity: Time O(n), Space O(1)',
        },
      ],
    },
    {
      id: 'q25-valid-parentheses-balanced-brackets',
      title: 'Valid Parentheses / Balanced Brackets',
      difficulty: 'medium',
      tags: ['stack', 'string'],
      problem:
        "Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid. An input string is valid if:\n\n1. Open brackets must be closed by the same type of brackets.\n2. Open brackets must be closed in the correct order.\n3. Every close bracket has a corresponding open bracket of the same type.",
      examples: [
        'Input: s = "()"\nOutput: true',
        'Input: s = "()[]{}"\nOutput: true',
        'Input: s = "(]"\nOutput: false',
      ],
      constraints: [
        '1 <= s.length <= 10^4',
        "s consists of parentheses only '()[]{}'.",
      ],
      hints: [
        {
          id: 'h1',
          text: 'Use a stack — push open brackets; on a close bracket, check if the stack top matches; if not or stack empty → invalid. Valid if stack is empty at the end.',
        },
        {
          id: 'h2',
          text: 'Complexity: Time O(n), Space O(n)',
        },
      ],
    },
    {
      id: 'q26-longest-palindromic-substring',
      title: 'Longest Palindromic Substring',
      difficulty: 'medium',
      tags: ['string', 'dp'],
      problem:
        'Given a string s, return the longest palindromic substring of s. A string is a palindrome when it reads the same backward as forward.',
      examples: [
        'Input: s = "babad"\nOutput: "bab"\nExplanation: "aba" is also a valid answer.',
        'Input: s = "cbbd"\nOutput: "bb"',
        'Input: s = "a"\nOutput: "a"',
      ],
      constraints: [
        '1 <= s.length <= 1000',
        's consist of only digits and English letters.',
      ],
      hints: [
        {
          id: 'h1',
          text: 'Expand-around-centre for each character (both odd and even lengths). Track the longest found. DP table also works in O(n²).',
        },
        {
          id: 'h2',
          text: 'Complexity: Time O(n²), Space O(1)',
        },
      ],
    },
    {
      id: 'q27-merge-intervals',
      title: 'Merge Intervals',
      difficulty: 'medium',
      tags: ['array', 'sorting'],
      problem:
        'Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.',
      examples: [
        'Input: intervals = [[1, 3], [2, 6], [8, 10], [15, 18]]\nOutput: [[1, 6], [8, 10], [15, 18]]\nExplanation: Since intervals [1, 3] and [2, 6] overlap, merge them into [1, 6].',
        'Input: intervals = [[1, 4], [4, 5]]\nOutput: [[1, 5]]\nExplanation: Intervals [1, 4] and [4, 5] are considered overlapping.',
        'Input: intervals = [[1, 4], [0, 4]]\nOutput: [[0, 4]]\nExplanation: [0, 4] fully covers [1, 4].',
      ],
      constraints: [
        '1 <= intervals.length <= 10^4',
        'intervals[i].length == 2',
        '0 <= starti <= endi <= 10^4',
      ],
      hints: [
        {
          id: 'h1',
          text: 'Sort by start time. Iterate — if current interval overlaps the last merged one, extend end; otherwise push to result.',
        },
        {
          id: 'h2',
          text: 'Complexity: Time O(n log n), Space O(n)',
        },
      ],
    },
    {
      id: 'q28-longest-increasing-subsequence-lis',
      title: 'Longest Increasing Subsequence (LIS)',
      difficulty: 'medium',
      tags: ['dp', 'binary-search'],
      problem:
        'Given an integer array nums, return the length of the longest strictly increasing subsequence. A subsequence is an array that can be derived from the array by deleting some or no elements without changing the order of the remaining elements.',
      examples: [
        'Input: nums = [10, 9, 2, 5, 3, 7, 101, 18]\nOutput: 4\nExplanation: The longest increasing subsequence is [2, 3, 7, 101], therefore the length is 4.',
        'Input: nums = [0, 1, 0, 3, 2, 3]\nOutput: 4\nExplanation: One LIS is [0, 1, 2, 3].',
        'Input: nums = [7, 7, 7, 7, 7, 7, 7]\nOutput: 1\nExplanation: Strictly increasing forbids equal values.',
      ],
      constraints: [
        '1 <= nums.length <= 2500',
        '-10^4 <= nums[i] <= 10^4',
      ],
      hints: [
        {
          id: 'h1',
          text: 'Patience sorting — maintain a tails array; binary search to find the position to replace. Length of tails array = LIS length.',
        },
        {
          id: 'h2',
          text: 'Complexity: Time O(n log n), Space O(n)',
        },
      ],
    },
    {
      id: 'q29-word-break-problem',
      title: 'Word Break Problem',
      difficulty: 'medium',
      tags: ['dp', 'string'],
      problem:
        'Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words. Note that the same word in the dictionary may be reused multiple times in the segmentation.',
      examples: [
        'Input: s = "leetcode", wordDict = ["leet", "code"]\nOutput: true\nExplanation: Return true because "leetcode" can be segmented as "leet code".',
        'Input: s = "applepenapple", wordDict = ["apple", "pen"]\nOutput: true\nExplanation: Return true because "applepenapple" can be segmented as "apple pen apple". Note that you are allowed to reuse a dictionary word.',
        'Input: s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]\nOutput: false',
      ],
      constraints: [
        '1 <= s.length <= 300',
        '1 <= wordDict.length <= 1000',
        '1 <= wordDict[i].length <= 20',
        's and wordDict[i] consist of only lowercase English letters.',
        'All the strings of wordDict are unique.',
      ],
      hints: [
        {
          id: 'h1',
          text: 'DP — dp[i] = true if S[0..i-1] can be segmented. For each i, check all j < i: if dp[j] and S[j..i-1] in dict → dp[i]=true.',
        },
        {
          id: 'h2',
          text: 'Complexity: Time O(n²), Space O(n)',
        },
      ],
    },
    {
      id: 'q30-reverse-a-stack-using-recursion',
      title: 'Reverse a Stack Using Recursion',
      difficulty: 'medium',
      tags: ['stack', 'recursion'],
      problem:
        'Given a stack of integers, reverse the stack using only recursion. You may not use any loop constructs (for / while) or any extra data structure (array, another stack, queue, etc.). You may only use the standard stack operations: push, pop, peek/top, and isEmpty.',
      examples: [
        'Input: stack = [1, 2, 3, 4, 5] (5 is top)\nOutput: [5, 4, 3, 2, 1] (1 is top)\nExplanation: The order of elements is reversed.',
        'Input: stack = [10, 20] (20 is top)\nOutput: [20, 10] (10 is top)',
        'Input: stack = [7] (7 is top)\nOutput: [7] (7 is top)\nExplanation: A single-element stack is already reversed.',
      ],
      constraints: [
        '1 <= stack.size() <= 1000',
        '-10^9 <= stack elements <= 10^9',
      ],
      hints: [
        {
          id: 'h1',
          text: 'Pop all elements recursively to the call stack, then use a helper insertAtBottom() to reinsert them — effectively reversing the order.',
        },
        {
          id: 'h2',
          text: 'Complexity: Time O(n²), Space O(n) call stack',
        },
      ],
    },
    {
      id: 'q31-subset-sum-problem',
      title: 'Subset Sum Problem',
      difficulty: 'medium',
      tags: ['dp'],
      problem:
        'Given an array of non-negative integers nums and a target integer sum, determine if there is a subset of nums whose elements add up to exactly sum. Each element may be used at most once. Return true if such a subset exists, otherwise false.',
      examples: [
        'Input: nums = [3, 34, 4, 12, 5, 2], sum = 9\nOutput: true\nExplanation: There is a subset [4, 5] with sum 9.',
        'Input: nums = [3, 34, 4, 12, 5, 2], sum = 30\nOutput: false\nExplanation: No subset sums to 30.',
        'Input: nums = [1, 2, 3], sum = 6\nOutput: true\nExplanation: The full set [1, 2, 3] sums to 6.',
      ],
      constraints: [
        '1 <= nums.length <= 100',
        '0 <= nums[i] <= 100',
        '0 <= sum <= 10^4',
      ],
      hints: [
        {
          id: 'h1',
          text: 'DP table dp[i][j] = true if subset of A[0..i-1] sums to j. Build bottom-up.',
        },
        {
          id: 'h2',
          text: 'Complexity: Time O(n·S), Space O(n·S)',
        },
      ],
    },
    {
      id: 'q32-check-if-a-linked-list-is-a-palindrome',
      title: 'Check if a Linked List is a Palindrome',
      difficulty: 'medium',
      tags: ['linked-list', 'two-pointers'],
      problem:
        'Given the head of a singly linked list, return true if it is a palindrome or false otherwise.',
      examples: [
        'Input: head = [1, 2, 2, 1]\nOutput: true',
        'Input: head = [1, 2]\nOutput: false',
        'Input: head = [1]\nOutput: true\nExplanation: A single node is always a palindrome.',
      ],
      constraints: [
        'The number of nodes in the list is in the range [1, 10^5].',
        '0 <= Node.val <= 9',
      ],
      hints: [
        {
          id: 'h1',
          text: 'Find mid with slow/fast pointers → reverse second half → compare with first half → restore (optional).',
        },
        {
          id: 'h2',
          text: 'Complexity: Time O(n), Space O(1)',
        },
      ],
    },
    {
      id: 'q33-combination-sum-unique-combinations',
      title: 'Combination Sum (Unique Combinations)',
      difficulty: 'medium',
      tags: ['backtracking'],
      problem:
        'Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order. The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the frequency of at least one of the chosen numbers is different. It is guaranteed that the number of unique combinations that sum up to target is less than 150 combinations for the given input.',
      examples: [
        'Input: candidates = [2, 3, 6, 7], target = 7\nOutput: [[2, 2, 3], [7]]\nExplanation: 2 and 3 appear in combinations; 2 + 2 + 3 = 7 and 7 = 7.',
        'Input: candidates = [2, 3, 5], target = 8\nOutput: [[2, 2, 2, 2], [2, 3, 3], [3, 5]]',
        'Input: candidates = [2], target = 1\nOutput: []\nExplanation: No combination sums to 1.',
      ],
      constraints: [
        '1 <= candidates.length <= 30',
        '2 <= candidates[i] <= 40',
        'All elements of candidates are distinct.',
        '1 <= target <= 40',
      ],
      hints: [
        {
          id: 'h1',
          text: 'Backtracking — for each candidate, recurse with remaining target; include same candidate again (unbounded). Prune when remaining < 0.',
        },
        {
          id: 'h2',
          text: 'Complexity: Time O(2^target), Space O(target)',
        },
      ],
    },
    {
      id: 'q34-implement-a-trie-prefix-tree',
      title: 'Implement a Trie (Prefix Tree)',
      difficulty: 'medium',
      tags: ['trie', 'design'],
      problem:
        'A trie (pronounced as "try") or prefix tree is a tree data structure used to efficiently store and retrieve keys in a dataset of strings. Implement the Trie class:\n\n- Trie() initializes the trie object.\n- void insert(String word) inserts the string word into the trie.\n- boolean search(String word) returns true if the string word is in the trie (i.e., was inserted before), and false otherwise.\n- boolean startsWith(String prefix) returns true if there is a previously inserted string word that has the prefix prefix, and false otherwise.',
      examples: [
        'Input:\n["Trie", "insert", "search", "search", "startsWith", "insert", "search"]\n[[], ["apple"], ["apple"], ["app"], ["app"], ["app"], ["app"]]\nOutput:\n[null, null, true, false, true, null, true]\nExplanation:\nTrie trie = new Trie();\ntrie.insert("apple");\ntrie.search("apple");   // return True\ntrie.search("app");     // return False\ntrie.startsWith("app"); // return True\ntrie.insert("app");\ntrie.search("app");     // return True',
        'Input: insert("hello"); search("hello"); startsWith("hel")\nOutput: true, true',
        'Input: insert("a"); search("b"); startsWith("a")\nOutput: false, true',
      ],
      constraints: [
        '1 <= word.length, prefix.length <= 2000',
        'word and prefix consist only of lowercase English letters.',
        'At most 3 * 10^4 calls in total will be made to insert, search, and startsWith.',
      ],
      hints: [
        {
          id: 'h1',
          text: "Each TrieNode has an array of 26 children (for 'a' to 'z') and an isEnd flag. Insert/Search traverse character by character.",
        },
        {
          id: 'h2',
          text: 'Complexity: Time O(L) per op, Space O(alphabet × L × N)',
        },
      ],
    },
    {
      id: 'q35-lru-cache-implementation',
      title: 'LRU Cache Implementation',
      difficulty: 'medium',
      tags: ['design', 'hashmap', 'linked-list'],
      problem:
        'Design a data structure that follows the constraints of a Least Recently Used (LRU) cache. Implement the LRUCache class:\n\n- LRUCache(int capacity) initialize the LRU cache with positive size capacity.\n- int get(int key) return the value of the key if the key exists, otherwise return -1.\n- void put(int key, int value) update the value of the key if the key exists. Otherwise, add the key-value pair to the cache. If the number of keys exceeds the capacity from this operation, evict the least recently used key.\n\nThe functions get and put must each run in O(1) average time complexity.',
      examples: [
        'Input:\n["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]\n[[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]\nOutput:\n[null, null, null, 1, null, -1, null, -1, 3, 4]\nExplanation:\nLRUCache lRUCache = new LRUCache(2);\nlRUCache.put(1, 1); // cache is {1=1}\nlRUCache.put(2, 2); // cache is {1=1, 2=2}\nlRUCache.get(1);    // return 1\nlRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}\nlRUCache.get(2);    // returns -1 (not found)\nlRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}\nlRUCache.get(1);    // return -1 (not found)\nlRUCache.get(3);    // return 3\nlRUCache.get(4);    // return 4',
        'Input: capacity = 1; put(2, 1); get(2)\nOutput: 1',
        'Input: capacity = 2; put(2, 1); put(1, 1); put(2, 3); put(4, 1); get(1); get(2)\nOutput: -1, 3',
      ],
      constraints: [
        '1 <= capacity <= 3000',
        '0 <= key <= 10^4',
        '0 <= value <= 10^5',
        'At most 2 * 10^5 calls will be made to get and put.',
      ],
      hints: [
        {
          id: 'h1',
          text: 'Combine a HashMap (key → node) with a Doubly Linked List (most recent at front). On access/insert, move node to front; on capacity overflow, remove from rear.',
        },
        {
          id: 'h2',
          text: 'Complexity: Time O(1) per op, Space O(capacity)',
        },
      ],
    },
  ],
}
