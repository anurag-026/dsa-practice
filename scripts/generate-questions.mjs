import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const outDir = path.join(__dirname, '..', 'src', 'data', 'topics')

function slug(s) {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
    .slice(0, 48)
}

function q(n, title, difficulty, tags, problem, examples, approach, complexity) {
  const hints = [{ id: 'h1', text: approach }]
  if (complexity) hints.push({ id: 'h2', text: `Complexity: ${complexity}` })
  return {
    id: `q${String(n).padStart(2, '0')}-${slug(title)}`,
    title,
    difficulty,
    tags,
    problem,
    examples,
    hints,
  }
}

const easy = [
  q(
    1,
    'Reverse an Array',
    'easy',
    ['array', 'two-pointers'],
    'Given an array of N integers, reverse it in-place and print the result.',
    ['Input: N=5, A=[1, 2, 3, 4, 5]\nOutput: [5, 4, 3, 2, 1]'],
    'Two-pointer — swap A[left] and A[right], move pointers inward until they cross.',
    'Time O(n), Space O(1)',
  ),
  q(
    2,
    'Check Palindrome String',
    'easy',
    ['string', 'two-pointers'],
    'Given a string S, determine whether it reads the same forwards and backwards (palindrome). Ignore case.',
    ['Input: "racecar"\nOutput: YES', 'Input: "hello"\nOutput: NO'],
    'Compare S with its reverse; or use two pointers from both ends.',
    'Time O(n), Space O(1)',
  ),
  q(
    3,
    'Second Largest Element in an Array',
    'easy',
    ['array'],
    'Find the second largest distinct element in an array of N integers. If no such element exists, return -1.',
    [
      'Input: N=6, A=[12, 35, 1, 10, 34, 1]\nOutput: 34\nLargest=35, Second largest=34'],
    'Single pass — maintain two variables: first and second. Update both as you iterate.',
    'Time O(n), Space O(1)',
  ),
  q(
    4,
    'Count Vowels and Consonants in a String',
    'easy',
    ['string'],
    'Given a string, count the number of vowels (a, e, i, o, u — case insensitive) and consonants separately.',
    ['Input: "Hello World"\nOutput: Vowels: 3, Consonants: 7'],
    'Iterate each character; skip spaces; check against vowel set for classification.',
    'Time O(n), Space O(1)',
  ),
  q(
    5,
    'Find the Missing Number (1 to N)',
    'easy',
    ['array', 'math'],
    'An array contains N-1 distinct integers in the range [1, N]. Exactly one number is missing. Find it.',
    [
      'Input: N=6, A=[1, 2, 4, 5, 6]\nOutput: 3\nExpected sum = 21; Actual = 18; Missing = 3'],
    'Compute expected sum = N*(N+1)/2 and subtract array sum. Or use XOR.',
    'Time O(n), Space O(1)',
  ),
  q(
    6,
    'Check if a Number is Prime',
    'easy',
    ['math'],
    'Given an integer N (N ≥ 2), determine whether it is a prime number.',
    ['Input: 17\nOutput: Prime', 'Input: 12\nOutput: Not Prime'],
    'Check divisibility from 2 to √N. If any divisor found → not prime.',
    'Time O(√n), Space O(1)',
  ),
  q(
    7,
    'Print Fibonacci Series up to N Terms',
    'easy',
    ['math'],
    'Given N, print the first N terms of the Fibonacci sequence.',
    ['Input: N=7\nOutput: 0 1 1 2 3 5 8'],
    'Use two variables a=0, b=1; print a, then update a,b iteratively N times.',
    'Time O(n), Space O(1)',
  ),
  q(
    8,
    'Binary Search in a Sorted Array',
    'easy',
    ['array', 'binary-search'],
    'Given a sorted array A of N integers and a target T, return the index of T in A. If not found, return -1.',
    ['Input: A=[2, 5, 8, 12, 16, 23], T=12\nOutput: 3'],
    'Maintain low and high pointers; check mid; halve the search space each iteration.',
    'Time O(log n), Space O(1)',
  ),
  q(
    9,
    'Reverse a Singly Linked List',
    'easy',
    ['linked-list'],
    'Given the head of a singly linked list, reverse it in-place and return the new head.',
    [
      'Input: 1 → 2 → 3 → 4 → 5 → NULL\nOutput: 5 → 4 → 3 → 2 → 1 → NULL'],
    'Use three pointers: prev=NULL, curr=head, next. Reverse curr.next = prev and advance.',
    'Time O(n), Space O(1)',
  ),
  q(
    10,
    'Check if Two Strings are Anagrams',
    'easy',
    ['string', 'hashing'],
    'Given two strings S and T, determine if they are anagrams of each other (same characters, same frequency, different order).',
    [
      'Input: S="listen", T="silent"\nOutput: YES',
      'Input: S="hello", T="world"\nOutput: NO'],
    'Sort both strings and compare, or use a frequency HashMap (count up for S, count down for T).',
    'Time O(n log n) or O(n), Space O(1) / O(k)',
  ),
  q(
    11,
    'Find All Duplicates in an Array',
    'easy',
    ['array'],
    'Given an array of N integers where elements are in range [1, N], find all elements that appear more than once.',
    ['Input: N=8, A=[4, 3, 2, 7, 8, 2, 3, 1]\nOutput: [2, 3]'],
    'For each A[i], negate A[abs(A[i])-1]. If it is already negative, that index+1 is a duplicate.',
    'Time O(n), Space O(1)',
  ),
  q(
    12,
    'Rotate Array by K Steps to the Right',
    'easy',
    ['array'],
    'Given an array A of N integers and an integer K, rotate the array to the right by K steps.',
    ['Input: A=[1,2,3,4,5,6,7], K=3\nOutput: [5,6,7,1,2,3,4]'],
    'Reverse whole array → reverse first K → reverse remaining N-K. Effective K = K % N.',
    'Time O(n), Space O(1)',
  ),
  q(
    13,
    'Sum of Both Diagonals of a Matrix',
    'easy',
    ['matrix'],
    'Given an N×N square matrix, find the sum of elements on its primary and secondary diagonals. Count the centre element only once for odd N.',
    [
      'Input: [[1,2,3],[4,5,6],[7,8,9]]\nOutput: 25\nPrimary: 1+5+9=15 | Secondary: 3+5+7=15 | Centre once → 25'],
    'Single pass — add A[i][i] and A[i][N-1-i]; subtract A[N/2][N/2] once when N is odd.',
    'Time O(n), Space O(1)',
  ),
  q(
    14,
    'Implement Bubble Sort',
    'easy',
    ['sorting'],
    'Sort an array of N integers in ascending order using Bubble Sort. Print the sorted array.',
    ['Input: N=5, A=[64, 34, 25, 12, 22]\nOutput: [12, 22, 25, 34, 64]'],
    'Repeatedly swap adjacent elements if out of order. Optimise with a swapped flag to exit early if already sorted.',
    'Time O(n²) worst, Space O(1)',
  ),
  q(
    15,
    'Check if a Number is a Power of 2',
    'easy',
    ['bit-manipulation'],
    'Given a positive integer N, determine if it is a power of 2.',
    ['Input: 16\nOutput: YES', 'Input: 18\nOutput: NO'],
    'Use bit trick: N > 0 && (N & (N-1)) == 0. Powers of 2 have exactly one set bit.',
    'Time O(1), Space O(1)',
  ),
  q(
    16,
    'Remove One Digit to Make Number Maximum',
    'easy',
    ['string', 'greedy'],
    'You are given a string number representing a positive integer and a digit d. Remove exactly one occurrence of digit d from number so that the resulting number is the maximum possible.',
    [
      'Input: number="23551", d=5\nOutput: "2351"',
      'Input: number="9591", d=9\nOutput: "591"'],
    'Scan left to right; remove the first occurrence of d where the next digit is greater than d. If none found, remove the last occurrence.',
    'Time O(n), Space O(n)',
  ),
  q(
    17,
    'Count Repeated and Non-Repeated Elements',
    'easy',
    ['array', 'hashing'],
    'Given an array A of N integers, count: (1) how many distinct values appear more than once, and (2) how many distinct values appear exactly once.',
    [
      'Input: N=6, A=[1, 2, 2, 3, 3, 3]\nOutput: Repeated: 2, Non-Repeated: 1'],
    'Build a frequency HashMap; scan entries — count those with freq > 1 as repeated, freq == 1 as non-repeated.',
    'Time O(n), Space O(n)',
  ),
  q(
    18,
    'Zigzag Level-Order Traversal of Binary Tree',
    'easy',
    ['tree', 'bfs'],
    'Given the root of a binary tree, return its zigzag level-order traversal (alternate left-to-right and right-to-left per level).',
    [
      'Input Tree: 3 / \\ 9 20 / \\ 15 7\nOutput: [[3], [20, 9], [15, 7]]'],
    'BFS with a deque; toggle a direction flag per level to decide whether to append front or back.',
    'Time O(n), Space O(n)',
  ),
  q(
    19,
    'Smallest Power of 2 Greater Than or Equal to N',
    'easy',
    ['bit-manipulation'],
    'Given an array A of N integers, for each element find the smallest power of 2 that is ≥ that element.',
    ['Input: A=[3, 7, 1, 10]\nOutput: [4, 8, 1, 16]'],
    'For each value, if already a power of 2 return it. Otherwise find MSB position and return 2^(position+1).',
    'Time O(n·log max_val), Space O(1)',
  ),
  q(
    20,
    'First Non-Repeating Character in a String',
    'easy',
    ['string', 'hashing'],
    'Given a string S, find the first character that does not repeat. Return the character; if none, return "#".',
    ['Input: "geeksforgeeks"\nOutput: "f"'],
    'Build a frequency array (size 26) in one pass; scan string again and return the first character with freq=1.',
    'Time O(n), Space O(1)',
  )]

const medium = [
  q(
    21,
    'Longest Substring Without Repeating Characters',
    'medium',
    ['string', 'sliding-window'],
    'Given a string S, find the length of the longest substring with all unique characters.',
    ['Input: "abcabcbb"\nOutput: 3', 'Input: "pwwkew"\nOutput: 3'],
    'Sliding window + HashMap. Move right pointer; if duplicate found, move left pointer past the previous occurrence.',
    'Time O(n), Space O(min(n, alphabet))',
  ),
  q(
    22,
    'Next Permutation',
    'medium',
    ['array', 'greedy'],
    'Given an array of integers representing a permutation, rearrange it into the lexicographically next greater permutation. If it is the largest, rearrange to the smallest (ascending order). Modify in-place.',
    ['Input: [1, 2, 3]\nOutput: [1, 3, 2]', 'Input: [3, 2, 1]\nOutput: [1, 2, 3]'],
    'Find rightmost index i where A[i] < A[i+1]. Swap A[i] with the smallest element greater than it to the right. Reverse the suffix from i+1 onward.',
    'Time O(n), Space O(1)',
  ),
  q(
    23,
    'Detect a Loop in a Linked List',
    'medium',
    ['linked-list', 'two-pointers'],
    'Given a linked list, detect whether it contains a cycle. Return true if a cycle exists, false otherwise.',
    ['Input: 1 → 2 → 3 → 4 → 5 → (back to 2)\nOutput: true'],
    "Floyd's Cycle Detection — use two pointers (slow moves 1 step, fast moves 2). If they meet, a cycle exists.",
    'Time O(n), Space O(1)',
  ),
  q(
    24,
    'Maximum Product Subarray',
    'medium',
    ['array', 'dp'],
    'Given an integer array A, find the contiguous subarray that has the largest product and return that product.',
    ['Input: A=[2, 3, -2, 4]\nOutput: 6', 'Input: A=[-2, 0, -1]\nOutput: 0'],
    'Track both max and min product at each position (min can turn max after multiplying a negative). Update global max each step.',
    'Time O(n), Space O(1)',
  ),
  q(
    25,
    'Valid Parentheses / Balanced Brackets',
    'medium',
    ['stack', 'string'],
    "Given a string containing only '(', ')', '{', '}', '[', ']', determine if the input string is valid. An input string is valid if every open bracket has a matching close bracket in the correct order.",
    ['Input: "({[]})"\nOutput: Valid', 'Input: "([)]"\nOutput: Invalid'],
    'Use a stack — push open brackets; on a close bracket, check if the stack top matches; if not or stack empty → invalid. Valid if stack is empty at the end.',
    'Time O(n), Space O(n)',
  ),
  q(
    26,
    'Longest Palindromic Substring',
    'medium',
    ['string', 'dp'],
    'Given a string S of length N, find the longest substring that is a palindrome. If multiple exist with equal length, return the one with the smaller starting index.',
    ['Input: "ababc"\nOutput: "aba"', 'Input: "babad"\nOutput: "bab"'],
    'Expand-around-centre for each character (both odd and even lengths). Track the longest found. DP table also works in O(n²).',
    'Time O(n²), Space O(1)',
  ),
  q(
    27,
    'Merge Intervals',
    'medium',
    ['array', 'sorting'],
    'Given a list of intervals [start, end], merge all overlapping intervals and return a list of non-overlapping intervals.',
    [
      'Input: [[1,3],[2,6],[8,10],[15,18]]\nOutput: [[1,6],[8,10],[15,18]]'],
    'Sort by start time. Iterate — if current interval overlaps the last merged one, extend end; otherwise push to result.',
    'Time O(n log n), Space O(n)',
  ),
  q(
    28,
    'Longest Increasing Subsequence (LIS)',
    'medium',
    ['dp', 'binary-search'],
    'Given an array of N integers, find the length of the longest strictly increasing subsequence.',
    ['Input: A=[10, 9, 2, 5, 3, 7, 101, 18]\nOutput: 4'],
    'Patience sorting — maintain a tails array; binary search to find the position to replace. Length of tails array = LIS length.',
    'Time O(n log n), Space O(n)',
  ),
  q(
    29,
    'Word Break Problem',
    'medium',
    ['dp', 'string'],
    'Given a string S and a dictionary of words, determine if S can be segmented into a space-separated sequence of one or more dictionary words.',
    [
      'Input: S="leetcode", dict=["leet","code"]\nOutput: true',
      'Input: S="catsandog", dict=["cats","dog","sand","and","cat"]\nOutput: false'],
    'DP — dp[i] = true if S[0..i-1] can be segmented. For each i, check all j < i: if dp[j] and S[j..i-1] in dict → dp[i]=true.',
    'Time O(n²), Space O(n)',
  ),
  q(
    30,
    'Reverse a Stack Using Recursion',
    'medium',
    ['stack', 'recursion'],
    'Given a stack, reverse it using only recursion — no loops or extra data structures allowed.',
    [
      'Input: Stack = [1, 2, 3, 4, 5] (5 on top)\nOutput: Stack = [5, 4, 3, 2, 1] (1 on top)'],
    'Pop all elements recursively to the call stack, then use a helper insertAtBottom() to reinsert them — effectively reversing the order.',
    'Time O(n²), Space O(n) call stack',
  ),
  q(
    31,
    'Subset Sum Problem',
    'medium',
    ['dp'],
    'Given an array A of N non-negative integers and a target sum S, determine if there exists a subset of A whose elements sum to exactly S.',
    [
      'Input: A=[3, 34, 4, 12, 5, 2], S=9\nOutput: true',
      'Input: A=[3, 34, 4, 12, 5, 2], S=30\nOutput: false'],
    'DP table dp[i][j] = true if subset of A[0..i-1] sums to j. Build bottom-up.',
    'Time O(n·S), Space O(n·S)',
  ),
  q(
    32,
    'Check if a Linked List is a Palindrome',
    'medium',
    ['linked-list', 'two-pointers'],
    'Given the head of a singly linked list, determine whether it reads the same forwards and backwards.',
    [
      'Input: 1 → 2 → 2 → 1\nOutput: true',
      'Input: 1 → 2 → 3\nOutput: false'],
    'Find mid with slow/fast pointers → reverse second half → compare with first half → restore (optional).',
    'Time O(n), Space O(1)',
  ),
  q(
    33,
    'Combination Sum (Unique Combinations)',
    'medium',
    ['backtracking'],
    'Given an array of distinct integers candidates and a target integer target, find all unique combinations of candidates that sum to target. You may use the same number more than once.',
    ['Input: candidates=[2,3,6,7], target=7\nOutput: [[2,2,3],[7]]'],
    'Backtracking — for each candidate, recurse with remaining target; include same candidate again (unbounded). Prune when remaining < 0.',
    'Time O(2^target), Space O(target)',
  ),
  q(
    34,
    'Implement a Trie (Prefix Tree)',
    'medium',
    ['trie', 'design'],
    'Design and implement a Trie data structure that supports: insert(word), search(word) — returns true if word is in trie, startsWith(prefix) — returns true if any inserted word has this prefix.',
    [
      'insert("apple") → search("apple") → true\nsearch("app") → false\nstartsWith("app") → true'],
    "Each TrieNode has an array of 26 children (for 'a' to 'z') and an isEnd flag. Insert/Search traverse character by character.",
    'Time O(L) per op, Space O(alphabet × L × N)',
  ),
  q(
    35,
    'LRU Cache Implementation',
    'medium',
    ['design', 'hashmap', 'linked-list'],
    'Design a data structure that follows Least Recently Used (LRU) cache policy. It should support get(key) and put(key, value), both in O(1) time. Cache capacity is given at initialisation.',
    [
      'capacity=2:\nput(1,1) → put(2,2) → get(1)→1 → put(3,3) (evicts 2) → get(2)→-1 → put(4,4) (evicts 1) → get(1)→-1 → get(3)→3 → get(4)→4'],
    'Combine a HashMap (key → node) with a Doubly Linked List (most recent at front). On access/insert, move node to front; on capacity overflow, remove from rear.',
    'Time O(1) per op, Space O(capacity)',
  )]

const hard = [
  q(
    36,
    'RPG Monster Defeat (Greedy Sorting)',
    'hard',
    ['greedy', 'sorting'],
    'You are playing an RPG with N monsters. Monster i has a power[i] required to defeat it and grants bonus[i] experience after defeat. You start with e experience points. You can fight monsters in any order. To defeat monster i you need current experience ≥ power[i]; after defeating it, experience += bonus[i]. Find the maximum number of monsters you can defeat.',
    ['Input: N=3, e=5, power=[3,7,2], bonus=[4,3,5]\nOutput: 3'],
    'Sort monsters by power ascending. Greedily defeat as many as possible in order of power.',
    'Time O(n log n), Space O(1)',
  ),
  q(
    37,
    'Xor-Sum Maximization',
    'hard',
    ['bit-manipulation', 'greedy'],
    'Given an array A of N integers and an integer K, define Xor-Sum(x) = (x XOR A[1]) + (x XOR A[2]) + ... + (x XOR A[N]). Find the integer x in the range [0, K] that maximises Xor-Sum(x). Print the maximum Xor-Sum value.',
    ['Input: N=3, K=8, A=[1, 2, 3]\nOutput: maximise Xor-Sum for x in [0, K]'],
    'For each bit position, decide whether setting that bit in x increases the sum without exceeding K. Process from MSB to LSB.',
    'Time O(n·log K), Space O(1)',
  ),
  q(
    38,
    'LIS with Bitwise Operation Condition',
    'hard',
    ['dp', 'bit-manipulation'],
    'Given an array A of N integers, an operation type (AND / OR / XOR), and a target value, find the length of the Longest Increasing Subsequence (LIS) where adjacent elements in the subsequence satisfy: A[i] OP A[j] == target.',
    ['Input: N=4, A=[1,3,2,4], OP=AND, target=0\nOutput: 3'],
    'Modify standard LIS DP. dp[i] = length of valid subsequence ending at index i. For each j < i, if A[j] OP A[i] == target and A[j] < A[i], update dp[i].',
    'Time O(n²), Space O(n)',
  ),
  q(
    39,
    'Split Array into K Consecutive Segments',
    'hard',
    ['binary-search', 'greedy'],
    'Given an array A of N integers, split it into exactly K consecutive non-empty segments. Minimise the maximum segment sum (classic challenge variant).',
    ['Input: N=5, K=3, A=[7,2,5,10,8]\nOutput: 14'],
    'Binary search on the answer (minimum possible max sum). For a given mid, greedily check if array can be split into ≤ K parts with each part ≤ mid.',
    'Time O(n log(sum)), Space O(1)',
  ),
  q(
    40,
    'Coin Change — Minimum Number of Coins',
    'hard',
    ['dp'],
    'Given coin denominations and an amount, find the minimum number of coins that make up that amount. You may use each coin denomination any number of times. Return -1 if not possible.',
    [
      'Input: coins=[1,5,6,9], amount=11\nOutput: 2',
      'Input: coins=[2], amount=3\nOutput: -1'],
    'DP. dp[i] = min coins for amount i. For each coin, dp[i] = min(dp[i], dp[i-coin]+1).',
    'Time O(amount × coins), Space O(amount)',
  ),
  q(
    41,
    'Edit Distance (Levenshtein Distance)',
    'hard',
    ['dp', 'string'],
    'Given two strings S and T, find the minimum number of single-character edit operations (insert, delete, replace) required to convert S into T.',
    [
      'Input: S="horse", T="ros"\nOutput: 3',
      'Input: S="intention", T="execution"\nOutput: 5'],
    '2D DP. dp[i][j] = edit distance between S[0..i-1] and T[0..j-1]. If chars match: dp[i-1][j-1]; else 1 + min(insert, delete, replace).',
    'Time O(m·n), Space O(m·n)',
  ),
  q(
    42,
    'Minimum Insertions to Make a String Palindrome',
    'hard',
    ['dp', 'string'],
    'Given a string S of length N, find the minimum number of characters to insert at any position to make the string a palindrome.',
    ['Input: "abcd"\nOutput: 3', 'Input: "aab"\nOutput: 1'],
    'Find the Longest Palindromic Subsequence (LPS) of S, which equals LCS(S, reverse(S)). Answer = N - LPS.',
    'Time O(n²), Space O(n²)',
  ),
  q(
    43,
    '0/1 Knapsack Problem',
    'hard',
    ['dp'],
    'Given N items each with a weight and value, and a knapsack with capacity W, find the maximum total value of items you can carry. Each item can be included at most once.',
    [
      'Input: N=3, W=4, weights=[4,5,1], values=[1,2,3]\nOutput: 3',
      'Input: N=4, W=5, weights=[2,3,4,5], values=[3,4,5,6]\nOutput: 7'],
    '2D DP: dp[i][w] = max value using first i items with capacity w. Either skip item i or include it (if weight[i] ≤ w).',
    'Time O(n·W), Space O(n·W)',
  ),
  q(
    44,
    'Maximum XOR Subset with at Most N/2 Elements',
    'hard',
    ['bit-manipulation'],
    'Given an even-length array A of N elements, choose at most N/2 elements (not necessarily consecutive). Maximise the XOR of the selected elements. Print the maximum XOR value.',
    [
      'Input: N=4, A=[1, 2, 4, 7]\nOutput: 7',
      'Input: N=4, A=[2, 4, 6, 8]\nOutput: 14'],
    'Build a linear XOR basis (Gaussian elimination over GF(2)). Maximise XOR from the basis under the size constraint.',
    'Time O(n·30), Space O(30)',
  ),
  q(
    45,
    'Minimum Inversions After XOR-ing with B',
    'hard',
    ['bit-manipulation', 'trie'],
    'Given an array A of N integers, choose a non-negative integer B. Set A[i] = A[i] XOR B for all i. Minimise the number of inversions in the resulting array A. Print the minimum inversion count modulo 10^9+7.',
    ['Input: N=3, A=[3, 1, 2]\nOutput: 0'],
    'For each bit position independently, decide whether flipping that bit reduces inversions. Use a trie to count inversions bit-by-bit from MSB to LSB.',
    'Time O(n·30), Space O(n·30)',
  ),
  q(
    46,
    'Gift Packing — Maximise Value Across K Boxes',
    'hard',
    ['dp', 'sliding-window'],
    'You have N gifts of different types (array A[i] is the type of gift i). Pack them into exactly K boxes (consecutive subarrays). The value of a box equals the number of distinct gift types inside it. Maximise the total value across all K boxes.',
    ['Input: N=6, K=3, A=[1,1,2,2,3,3]\nOutput: 4'],
    'DP with sliding window + HashMap. dp[k][i] = max value packing first i gifts into k boxes.',
    'Time O(K·n) optimised, Space O(K·n)',
  ),
  q(
    47,
    'Heroes vs Villains Battle',
    'hard',
    ['greedy', 'two-pointers'],
    'N heroes and M villains are positioned on a number line. A hero at position h can defeat a villain at position v if |h - v| ≤ K. Find the maximum number of villain-hero pairs (one hero defeats at most one villain, one villain defeated by at most one hero).',
    [
      'Input: N=3, M=3, K=2, heroes=[1,5,9], villains=[3,6,11]\nOutput: 2'],
    'Sort both arrays. Use two pointers — match earliest available hero with the nearest reachable villain.',
    'Time O((N+M) log(N+M)), Space O(1)',
  ),
  q(
    48,
    'Ugliness Minimization',
    'hard',
    ['greedy', 'bit-manipulation'],
    "Given a binary string S of length N, its ugliness is the decimal value it represents. You can perform two operations with a total budget of CASH coins: (1) Swap the leftmost '1' with a '0' to its right — costs A coins. (2) Flip a character (0→1 or 1→0) — costs B coins. Minimise the ugliness.",
    ['Input: S="011111", CASH=7, A=1, B=3\nOutput: 7 (binary "000111")'],
    'Greedy — minimise the most significant bits. Decide for each leading 1: cheaper to swap left or flip to 0 given remaining budget.',
    'Time O(n²) worst, Space O(n)',
  ),
  q(
    49,
    'Road Terrain Transformation',
    'hard',
    ['binary-search', 'greedy'],
    "Given N road segments, each with a terrain difficulty level, and a budget of K operations (each operation reduces one segment's difficulty by 1), minimise the maximum difficulty across all segments after operations.",
    ['Input: N=5, K=3, difficulties=[3,5,2,8,4]\nOutput: 5'],
    'Binary search on the answer (candidate maximum difficulty X). For each X, greedily compute total operations needed to bring all segments to ≤ X.',
    'Time O(n log(max_diff)), Space O(1)',
  ),
  q(
    50,
    'Mountain Array Transformation',
    'hard',
    ['greedy', 'lis'],
    'Given an array A of N integers, find the minimum number of element changes needed to make it a mountain array — an array that first strictly increases to a peak and then strictly decreases (peak not at either end).',
    ['Input: N=5, A=[2,1,4,5,3]\nOutput: 1'],
    'For each index i as the peak candidate, compute LIS ending at i from the left and LDS starting at i to the right. Min changes = N - max(LIS_left[i] + LDS_right[i] - 1).',
    'Time O(n log n), Space O(n)',
  )]

function toTsLiteral(value, indent = 0) {
  const pad = '  '.repeat(indent)
  const padIn = '  '.repeat(indent + 1)
  if (typeof value === 'string') {
    return JSON.stringify(value)
  }
  if (Array.isArray(value)) {
    if (value.length === 0) return '[]'
    const items = value.map((v) => `${padIn}${toTsLiteral(v, indent + 1)}`)
    return `[\n${items.join(',\n')},\n${pad}]`
  }
  if (value && typeof value === 'object') {
    const entries = Object.entries(value).map(
      ([k, v]) => `${padIn}${k}: ${toTsLiteral(v, indent + 1)}`,
    )
    return `{\n${entries.join(',\n')},\n${pad}}`
  }
  return String(value)
}

function emit(file, exportName, topic) {
  const content = `import type { Topic } from '../../types/question'

export const ${exportName}: Topic = ${toTsLiteral(topic)}
`
  fs.writeFileSync(path.join(outDir, file), content)
}

fs.mkdirSync(outDir, { recursive: true })

emit('easy.ts', 'easyTopic', {
  id: 'easy',
  name: 'Easy',
  description: 'Foundational problems — arrays, strings, math, and basic DS.',
  questions: easy,
})

emit('medium.ts', 'mediumTopic', {
  id: 'medium',
  name: 'Medium',
  description: 'Greedy, sliding window, DP intro, trees, stack, and design.',
  questions: medium,
})

emit('hard.ts', 'hardTopic', {
  id: 'hard',
  name: 'Hard',
  description: 'Advanced DP, bit tricks, binary search on answer, and greedy.',
  questions: hard,
})

console.log(
  `Generated ${easy.length + medium.length + hard.length} questions (${easy.length} easy, ${medium.length} medium, ${hard.length} hard)`,
)
