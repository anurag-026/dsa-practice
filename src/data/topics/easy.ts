import type { Topic } from '../../types/question'

export const easyTopic: Topic = {
  id: 'easy',
  name: 'Easy',
  description: 'Foundational problems — arrays, strings, math, and basic DS.',
  questions: [
    {
      id: 'q01-reverse-an-array',
      title: 'Reverse an Array',
      difficulty: 'easy',
      tags: ['array', 'two-pointers'],
      problem:
        'Given an array arr of N integers, reverse the array in-place (the first element becomes the last, the second becomes the second last, and so on). Return the reversed array.',
      examples: [
        'Input: arr = [1, 2, 3, 4, 5]\nOutput: [5, 4, 3, 2, 1]\nExplanation: The array is reversed end-to-end.',
        'Input: arr = [1]\nOutput: [1]\nExplanation: A single-element array remains unchanged.',
        'Input: arr = [4, 3, 2, 1]\nOutput: [1, 2, 3, 4]\nExplanation: Already descending; after reverse it becomes ascending.',
      ],
      constraints: [
        '1 <= N <= 10^5',
        '1 <= arr[i] <= 10^9',
      ],
      hints: [
        {
          id: 'h1',
          text: 'Two-pointer — swap A[left] and A[right], move pointers inward until they cross.',
        },
        {
          id: 'h2',
          text: 'Complexity: Time O(n), Space O(1)',
        },
      ],
    },
    {
      id: 'q02-check-palindrome-string',
      title: 'Check Palindrome String',
      difficulty: 'easy',
      tags: ['string', 'two-pointers'],
      problem:
        'Given a string s, determine whether it is a palindrome — it reads the same forwards and backwards. Comparison is case-insensitive. Return "YES" if it is a palindrome, otherwise "NO".',
      examples: [
        'Input: s = "racecar"\nOutput: "YES"\nExplanation: Reading forwards and backwards gives the same string.',
        'Input: s = "hello"\nOutput: "NO"\nExplanation: "hello" reversed is "olleh".',
        'Input: s = "RaceCar"\nOutput: "YES"\nExplanation: Ignoring case, it matches its reverse.',
      ],
      constraints: [
        '1 <= s.length <= 10^5',
        's consists of English letters only.',
      ],
      hints: [
        {
          id: 'h1',
          text: 'Compare S with its reverse; or use two pointers from both ends.',
        },
        {
          id: 'h2',
          text: 'Complexity: Time O(n), Space O(1)',
        },
      ],
    },
    {
      id: 'q03-second-largest-element-in-an-array',
      title: 'Second Largest Element in an Array',
      difficulty: 'easy',
      tags: ['array'],
      problem:
        'Given an array of positive integers arr[] of size n, find the second largest distinct element in the array. If the second largest element does not exist, return -1.',
      examples: [
        'Input: arr = [12, 35, 1, 10, 34, 1]\nOutput: 34\nExplanation: The largest element is 35 and the second largest distinct element is 34.',
        'Input: arr = [10, 5, 10]\nOutput: 5\nExplanation: The largest element is 10 and the second largest distinct element is 5.',
        'Input: arr = [10, 10, 10]\nOutput: -1\nExplanation: The largest element is 10; there is no second largest distinct element.',
      ],
      constraints: [
        '1 <= n <= 10^6',
        '1 <= arr[i] <= 10^6',
      ],
      hints: [
        {
          id: 'h1',
          text: 'Single pass — maintain two variables: first and second. Update both as you iterate.',
        },
        {
          id: 'h2',
          text: 'Complexity: Time O(n), Space O(1)',
        },
      ],
    },
    {
      id: 'q04-count-vowels-and-consonants-in-a-string',
      title: 'Count Vowels and Consonants in a String',
      difficulty: 'easy',
      tags: ['string'],
      problem:
        'Given a string s consisting of English letters and spaces, count the number of vowels and consonants separately. Vowels are a, e, i, o, u (case insensitive). Spaces and non-letter characters are ignored.',
      examples: [
        'Input: s = "Hello World"\nOutput: Vowels = 3, Consonants = 7\nExplanation: Vowels: e, o, o; consonants: H, l, l, W, r, l, d.',
        'Input: s = "AEIOU"\nOutput: Vowels = 5, Consonants = 0\nExplanation: Every character is a vowel.',
        'Input: s = "xyz"\nOutput: Vowels = 0, Consonants = 3\nExplanation: No vowels appear.',
      ],
      constraints: [
        '1 <= s.length <= 10^5',
        's consists of English letters and spaces.',
      ],
      hints: [
        {
          id: 'h1',
          text: 'Iterate each character; skip spaces; check against vowel set for classification.',
        },
        {
          id: 'h2',
          text: 'Complexity: Time O(n), Space O(1)',
        },
      ],
    },
    {
      id: 'q05-find-the-missing-number-1-to-n',
      title: 'Find the Missing Number (1 to N)',
      difficulty: 'easy',
      tags: ['array', 'math'],
      problem:
        'You are given an array arr containing N − 1 distinct integers in the range [1, N]. Exactly one number from that range is missing. Find and return the missing number.',
      examples: [
        'Input: N = 5, arr = [1, 2, 3, 5]\nOutput: 4\nExplanation: Numbers 1…5 should appear; 4 is missing.',
        'Input: N = 6, arr = [1, 2, 4, 5, 6]\nOutput: 3\nExplanation: Expected sum = 21, actual sum = 18, missing = 3.',
        'Input: N = 2, arr = [1]\nOutput: 2\nExplanation: The only missing value in [1, 2] is 2.',
      ],
      constraints: [
        '2 <= N <= 10^5',
        '1 <= arr[i] <= N',
        'All elements of arr are distinct.',
        'arr.length == N - 1',
      ],
      hints: [
        {
          id: 'h1',
          text: 'Compute expected sum = N*(N+1)/2 and subtract array sum. Or use XOR.',
        },
        {
          id: 'h2',
          text: 'Complexity: Time O(n), Space O(1)',
        },
      ],
    },
    {
      id: 'q06-check-if-a-number-is-prime',
      title: 'Check if a Number is Prime',
      difficulty: 'easy',
      tags: ['math'],
      problem:
        'Given an integer n (n ≥ 2), determine whether n is a prime number. A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself. Return "Prime" if it is prime, otherwise "Not Prime".',
      examples: [
        'Input: n = 17\nOutput: "Prime"\nExplanation: 17 has no divisors other than 1 and 17.',
        'Input: n = 12\nOutput: "Not Prime"\nExplanation: 12 is divisible by 2, 3, 4, and 6.',
        'Input: n = 2\nOutput: "Prime"\nExplanation: 2 is the smallest prime number.',
      ],
      constraints: ['2 <= n <= 10^9'],
      hints: [
        {
          id: 'h1',
          text: 'Check divisibility from 2 to √N. If any divisor found → not prime.',
        },
        {
          id: 'h2',
          text: 'Complexity: Time O(√n), Space O(1)',
        },
      ],
    },
    {
      id: 'q07-print-fibonacci-series-up-to-n-terms',
      title: 'Print Fibonacci Series up to N Terms',
      difficulty: 'easy',
      tags: ['math'],
      problem:
        'Given a positive integer N, print the first N terms of the Fibonacci sequence. The sequence starts with 0 and 1, and each subsequent term is the sum of the previous two terms.',
      examples: [
        'Input: N = 7\nOutput: 0 1 1 2 3 5 8\nExplanation: First seven Fibonacci numbers.',
        'Input: N = 1\nOutput: 0\nExplanation: Only the first term is required.',
        'Input: N = 5\nOutput: 0 1 1 2 3\nExplanation: F0=0, F1=1, F2=1, F3=2, F4=3.',
      ],
      constraints: ['1 <= N <= 90'],
      hints: [
        {
          id: 'h1',
          text: 'Use two variables a=0, b=1; print a, then update a,b iteratively N times.',
        },
        {
          id: 'h2',
          text: 'Complexity: Time O(n), Space O(1)',
        },
      ],
    },
    {
      id: 'q08-binary-search-in-a-sorted-array',
      title: 'Binary Search in a Sorted Array',
      difficulty: 'easy',
      tags: ['array', 'binary-search'],
      problem:
        'Given a sorted array of distinct integers nums (ascending) and a target value target, return the index of target if it is in nums. If target is not present, return -1. Your algorithm must run in O(log n) time.',
      examples: [
        'Input: nums = [2, 5, 8, 12, 16, 23], target = 12\nOutput: 3\nExplanation: 12 is at index 3.',
        'Input: nums = [-1, 0, 3, 5, 9, 12], target = 9\nOutput: 4\nExplanation: 9 exists at index 4.',
        'Input: nums = [-1, 0, 3, 5, 9, 12], target = 2\nOutput: -1\nExplanation: 2 does not exist in nums.',
      ],
      constraints: [
        '1 <= nums.length <= 10^4',
        '-10^4 < nums[i], target < 10^4',
        'All integers in nums are unique.',
        'nums is sorted in ascending order.',
      ],
      hints: [
        {
          id: 'h1',
          text: 'Maintain low and high pointers; check mid; halve the search space each iteration.',
        },
        {
          id: 'h2',
          text: 'Complexity: Time O(log n), Space O(1)',
        },
      ],
    },
    {
      id: 'q09-reverse-a-singly-linked-list',
      title: 'Reverse a Singly Linked List',
      difficulty: 'easy',
      tags: ['linked-list'],
      problem:
        'Given the head of a singly linked list, reverse the list, and return the reversed list.',
      examples: [
        'Input: head = [1, 2, 3, 4, 5]\nOutput: [5, 4, 3, 2, 1]',
        'Input: head = [1, 2]\nOutput: [2, 1]',
        'Input: head = []\nOutput: []',
      ],
      constraints: [
        'The number of nodes in the list is in the range [0, 5000].',
        '-5000 <= Node.val <= 5000',
      ],
      hints: [
        {
          id: 'h1',
          text: 'Use three pointers: prev=NULL, curr=head, next. Reverse curr.next = prev and advance.',
        },
        {
          id: 'h2',
          text: 'Complexity: Time O(n), Space O(1)',
        },
      ],
    },
    {
      id: 'q10-check-if-two-strings-are-anagrams',
      title: 'Check if Two Strings are Anagrams',
      difficulty: 'easy',
      tags: ['string', 'hashing'],
      problem:
        'Given two strings s and t, return true if t is an anagram of s, and false otherwise. An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.',
      examples: [
        'Input: s = "anagram", t = "nagaram"\nOutput: true\nExplanation: Both strings use the same characters with the same frequencies.',
        'Input: s = "rat", t = "car"\nOutput: false\nExplanation: Character frequencies differ.',
        'Input: s = "listen", t = "silent"\nOutput: true\nExplanation: "silent" is a rearrangement of "listen".',
      ],
      constraints: [
        '1 <= s.length, t.length <= 5 * 10^4',
        's and t consist of lowercase English letters.',
      ],
      hints: [
        {
          id: 'h1',
          text: 'Sort both strings and compare, or use a frequency HashMap (count up for S, count down for T).',
        },
        {
          id: 'h2',
          text: 'Complexity: Time O(n log n) or O(n), Space O(1) / O(k)',
        },
      ],
    },
    {
      id: 'q11-find-all-duplicates-in-an-array',
      title: 'Find All Duplicates in an Array',
      difficulty: 'easy',
      tags: ['array'],
      problem:
        'Given an integer array nums of length n where all the integers of nums are in the range [1, n] and each integer appears once or twice, return an array of all the integers that appear twice. You must write an algorithm that runs in O(n) time and uses only constant extra space.',
      examples: [
        'Input: nums = [4, 3, 2, 7, 8, 2, 3, 1]\nOutput: [2, 3]',
        'Input: nums = [1, 1, 2]\nOutput: [1]',
        'Input: nums = [1]\nOutput: []',
      ],
      constraints: [
        'n == nums.length',
        '1 <= n <= 10^5',
        '1 <= nums[i] <= n',
        'Each element in nums appears once or twice.',
      ],
      hints: [
        {
          id: 'h1',
          text: 'For each A[i], negate A[abs(A[i])-1]. If it is already negative, that index+1 is a duplicate.',
        },
        {
          id: 'h2',
          text: 'Complexity: Time O(n), Space O(1)',
        },
      ],
    },
    {
      id: 'q12-rotate-array-by-k-steps-to-the-right',
      title: 'Rotate Array by K Steps to the Right',
      difficulty: 'easy',
      tags: ['array'],
      problem:
        'Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.',
      examples: [
        'Input: nums = [1, 2, 3, 4, 5, 6, 7], k = 3\nOutput: [5, 6, 7, 1, 2, 3, 4]\nExplanation: rotate 1 steps to the right: [7,1,2,3,4,5,6]; rotate 2 steps: [6,7,1,2,3,4,5]; rotate 3 steps: [5,6,7,1,2,3,4].',
        'Input: nums = [-1, -100, 3, 99], k = 2\nOutput: [3, 99, -1, -100]\nExplanation: rotate 1 steps to the right: [99,-1,-100,3]; rotate 2 steps: [3,99,-1,-100].',
        'Input: nums = [1, 2], k = 3\nOutput: [2, 1]\nExplanation: Effective rotation is k % n = 1, so [1,2] → [2,1].',
      ],
      constraints: [
        '1 <= nums.length <= 10^5',
        '-2^31 <= nums[i] <= 2^31 - 1',
        '0 <= k <= 10^5',
      ],
      hints: [
        {
          id: 'h1',
          text: 'Reverse whole array → reverse first K → reverse remaining N-K. Effective K = K % N.',
        },
        {
          id: 'h2',
          text: 'Complexity: Time O(n), Space O(1)',
        },
      ],
    },
    {
      id: 'q13-sum-of-both-diagonals-of-a-matrix',
      title: 'Sum of Both Diagonals of a Matrix',
      difficulty: 'easy',
      tags: ['matrix'],
      problem:
        'Given an n × n square matrix mat, return the sum of the matrix diagonals. Only include the sum of all the elements on the primary diagonal and all the elements on the secondary diagonal that are not part of the primary diagonal (so the center cell is counted once when n is odd).',
      examples: [
        'Input: mat = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]\nOutput: 25\nExplanation: Primary diagonal: 1+5+9=15; secondary: 3+5+7=15; center 5 counted once → 25.',
        'Input: mat = [[1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1]]\nOutput: 8\nExplanation: Four primary + four secondary corners/edges with no shared center overlap beyond distinct cells → 8.',
        'Input: mat = [[5]]\nOutput: 5\nExplanation: Single cell is both diagonals; count once.',
      ],
      constraints: [
        'n == mat.length == mat[i].length',
        '1 <= n <= 100',
        '1 <= mat[i][j] <= 100',
      ],
      hints: [
        {
          id: 'h1',
          text: 'Single pass — add A[i][i] and A[i][N-1-i]; subtract A[N/2][N/2] once when N is odd.',
        },
        {
          id: 'h2',
          text: 'Complexity: Time O(n), Space O(1)',
        },
      ],
    },
    {
      id: 'q14-implement-bubble-sort',
      title: 'Implement Bubble Sort',
      difficulty: 'easy',
      tags: ['sorting'],
      problem:
        'Given an array of N integers, sort the array in non-decreasing (ascending) order using Bubble Sort and return the sorted array. Adjacent elements are compared and swapped if they are out of order; repeat until the array is sorted.',
      examples: [
        'Input: arr = [64, 34, 25, 12, 22]\nOutput: [12, 22, 25, 34, 64]',
        'Input: arr = [5, 1, 4, 2, 8]\nOutput: [1, 2, 4, 5, 8]',
        'Input: arr = [1, 2, 3]\nOutput: [1, 2, 3]\nExplanation: Already sorted; no swaps needed if an early-exit flag is used.',
      ],
      constraints: [
        '1 <= N <= 10^3',
        '-10^9 <= arr[i] <= 10^9',
      ],
      hints: [
        {
          id: 'h1',
          text: 'Repeatedly swap adjacent elements if out of order. Optimise with a swapped flag to exit early if already sorted.',
        },
        {
          id: 'h2',
          text: 'Complexity: Time O(n²) worst, Space O(1)',
        },
      ],
    },
    {
      id: 'q15-check-if-a-number-is-a-power-of-2',
      title: 'Check if a Number is a Power of 2',
      difficulty: 'easy',
      tags: ['bit-manipulation'],
      problem:
        'Given an integer n, return true if it is a power of two. Otherwise, return false. An integer n is a power of two if there exists an integer x such that n == 2^x.',
      examples: [
        'Input: n = 1\nOutput: true\nExplanation: 2^0 = 1.',
        'Input: n = 16\nOutput: true\nExplanation: 2^4 = 16.',
        'Input: n = 3\nOutput: false\nExplanation: 3 is not a power of two.',
      ],
      constraints: ['-2^31 <= n <= 2^31 - 1'],
      hints: [
        {
          id: 'h1',
          text: 'Use bit trick: N > 0 && (N & (N-1)) == 0. Powers of 2 have exactly one set bit.',
        },
        {
          id: 'h2',
          text: 'Complexity: Time O(1), Space O(1)',
        },
      ],
    },
    {
      id: 'q16-remove-one-digit-to-make-number-maximum',
      title: 'Remove One Digit to Make Number Maximum',
      difficulty: 'easy',
      tags: ['string', 'greedy'],
      problem:
        'You are given a string number representing a positive integer and a digit character d. Remove exactly one occurrence of digit d from number so that the resulting number (as a string, keeping leading zeros if any remain in the middle/end positions as written) is the maximum possible. It is guaranteed that d appears at least once in number.',
      examples: [
        'Input: number = "23551", d = "5"\nOutput: "2351"\nExplanation: Both occurrences of 5 yield "2351" after removal.',
        'Input: number = "9591", d = "9"\nOutput: "951"\nExplanation: Removing the first 9 yields "591"; removing the second yields "951". The maximum is "951".',
        'Input: number = "1231", d = "1"\nOutput: "231"\nExplanation: Removing the first 1 gives "231"; removing the last 1 gives "123". The maximum is "231".',
      ],
      constraints: [
        '2 <= number.length <= 10^5',
        'number consists of digits only and does not contain leading zeros.',
        'd is a digit character that appears at least once in number.',
      ],
      hints: [
        {
          id: 'h1',
          text: 'Scan left to right; remove the first occurrence of d where the next digit is greater than d. If none found, remove the last occurrence.',
        },
        {
          id: 'h2',
          text: 'Complexity: Time O(n), Space O(n)',
        },
      ],
    },
    {
      id: 'q17-count-repeated-and-non-repeated-elements',
      title: 'Count Repeated and Non-Repeated Elements',
      difficulty: 'easy',
      tags: ['array', 'hashing'],
      problem:
        'Given an array arr of N integers, count: (1) how many distinct values appear more than once (repeated), and (2) how many distinct values appear exactly once (non-repeated). Return both counts.',
      examples: [
        'Input: arr = [1, 2, 2, 3, 3, 3]\nOutput: Repeated = 2, Non-Repeated = 1\nExplanation: 2 and 3 repeat; 1 appears once.',
        'Input: arr = [1, 2, 3, 4]\nOutput: Repeated = 0, Non-Repeated = 4\nExplanation: Every value appears exactly once.',
        'Input: arr = [5, 5, 5, 5]\nOutput: Repeated = 1, Non-Repeated = 0\nExplanation: Only value 5 appears, and more than once.',
      ],
      constraints: [
        '1 <= N <= 10^5',
        '1 <= arr[i] <= 10^9',
      ],
      hints: [
        {
          id: 'h1',
          text: 'Build a frequency HashMap; scan entries — count those with freq > 1 as repeated, freq == 1 as non-repeated.',
        },
        {
          id: 'h2',
          text: 'Complexity: Time O(n), Space O(n)',
        },
      ],
    },
    {
      id: 'q18-zigzag-level-order-traversal-of-binary-tree',
      title: 'Zigzag Level-Order Traversal of Binary Tree',
      difficulty: 'easy',
      tags: ['tree', 'bfs'],
      problem:
        'Given the root of a binary tree, return the zigzag level order traversal of its nodes\' values (i.e., from left to right, then right to left for the next level and alternate between).',
      examples: [
        'Input: root = [3, 9, 20, null, null, 15, 7]\nOutput: [[3], [20, 9], [15, 7]]\nExplanation: Level 0 left→right; level 1 right→left; level 2 left→right.',
        'Input: root = [1]\nOutput: [[1]]',
        'Input: root = []\nOutput: []',
      ],
      constraints: [
        'The number of nodes in the tree is in the range [0, 2000].',
        '-100 <= Node.val <= 100',
      ],
      hints: [
        {
          id: 'h1',
          text: 'BFS with a deque; toggle a direction flag per level to decide whether to append front or back.',
        },
        {
          id: 'h2',
          text: 'Complexity: Time O(n), Space O(n)',
        },
      ],
    },
    {
      id: 'q19-smallest-power-of-2-greater-than-or-equal-to-n',
      title: 'Smallest Power of 2 Greater Than or Equal to N',
      difficulty: 'easy',
      tags: ['bit-manipulation'],
      problem:
        'Given an array arr of N positive integers, for each element x find the smallest power of 2 that is greater than or equal to x. Return an array of these values in the same order.',
      examples: [
        'Input: arr = [3, 7, 1, 10]\nOutput: [4, 8, 1, 16]\nExplanation: 4≥3, 8≥7, 1≥1, 16≥10; each is the least power of two meeting the bound.',
        'Input: arr = [8, 16]\nOutput: [8, 16]\nExplanation: Both values are already powers of two.',
        'Input: arr = [2, 5, 9]\nOutput: [2, 8, 16]',
      ],
      constraints: [
        '1 <= N <= 10^5',
        '1 <= arr[i] <= 10^9',
      ],
      hints: [
        {
          id: 'h1',
          text: 'For each value, if already a power of 2 return it. Otherwise find MSB position and return 2^(position+1).',
        },
        {
          id: 'h2',
          text: 'Complexity: Time O(n·log max_val), Space O(1)',
        },
      ],
    },
    {
      id: 'q20-first-non-repeating-character-in-a-string',
      title: 'First Non-Repeating Character in a String',
      difficulty: 'easy',
      tags: ['string', 'hashing'],
      problem:
        'Given a string s consisting of lowercase English letters, find the first non-repeating character in it. Return that character. If there is no non-repeating character, return "#".',
      examples: [
        'Input: s = "geeksforgeeks"\nOutput: "f"\nExplanation: \'f\', \'o\', and \'r\' appear once; \'f\' is the first among them.',
        'Input: s = "aabb"\nOutput: "#"\nExplanation: Every character repeats.',
        'Input: s = "leetcode"\nOutput: "l"\nExplanation: \'l\' is the first character with frequency 1.',
      ],
      constraints: [
        '1 <= s.length <= 10^5',
        's consists of lowercase English letters.',
      ],
      hints: [
        {
          id: 'h1',
          text: 'Build a frequency array (size 26) in one pass; scan string again and return the first character with freq=1.',
        },
        {
          id: 'h2',
          text: 'Complexity: Time O(n), Space O(1)',
        },
      ],
    },
  ],
}
