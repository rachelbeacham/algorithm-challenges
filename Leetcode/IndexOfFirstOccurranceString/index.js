/*
28. Find the Index of the First Occurrence in a String
Easy
Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

Example 1:
Input: haystack = "sadbutsad", needle = "sad"
Output: 0
Explanation: "sad" occurs at index 0 and 6.
The first occurrence is at index 0, so we return 0

Example 2:
Input: haystack = "leetcode", needle = "leeto"
Output: -1
Explanation: "leeto" did not occur in "leetcode", so we return -1.

Constraints:
1 <= haystack.length, needle.length <= 104
haystack and needle consist of only lowercase English characters.
*/


function findSubstringBUILTIN (haystack, needle) {
    return haystack.indexOf(needle);
}

function findSubstring (haystack, needle) {
    const length = needle.length;
    if (length > haystack.length) retruen -1;
    for (let i = 0; i < haystack.length; i++) {
        let substr = haystack.slice(i, i + length);
        if (substr === needle) return i;
    }
    return -1;
}

let haystack = 'sadbutsad';
let needle = 'sad'
console.log(findSubstringBUILTIN(haystack, needle));
console.log(findSubstring(haystack, needle));

haystack = 'leetcode';
needle = 'leeto';
console.log(findSubstringBUILTIN(haystack, needle));
console.log(findSubstring(haystack, needle));
