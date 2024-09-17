// Anagram Groups
// Given an array of strings strs, group all anagrams together into sublists. You may return the output in any order.

// An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

// Example 1:
// Input: strs = ["act","pots","tops","cat","stop","hat"]
// Output: [["hat"],["act", "cat"],["stop", "pots", "tops"]]

// Example 2:
// Input: strs = ["x"]
// Output: [["x"]]

// Example 3:
// Input: strs = [""]
// Output: [[""]]


function groupAnagrams(strs) {
    const results = {};
    for (const s of strs) {
        const counts = Array(26).fill(0);
        for (const c of s) {
            const index = c.charCodeAt(0) - 'a'.charCodeAt(0);
            counts[index]++;
        }
        const key = counts.join('#');
        if (!results[key]) {
            results[key] = [];
        }
        results[key].push(s);
    }
    return Object.values(results);
};

console.log(groupAnagrams(["act","pots","tops","cat","stop","hat"]));
console.log(groupAnagrams(["x"]));
console.log(groupAnagrams([""]));
console.log(groupAnagrams(['bbbbbbbbbbdc', 'ddddddddddbc']));
