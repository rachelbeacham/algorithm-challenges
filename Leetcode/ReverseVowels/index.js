/*
345. Reverse Vowels of a String
Easy
Given a string s, reverse only all the vowels in the string and return it.

The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

Example 1:
Input: s = "IceCreAm"
Output: "AceCreIm"
Explanation:
The vowels in s are ['I', 'e', 'e', 'A']. On reversing the vowels, s becomes "AceCreIm".

Example 2:
Input: s = "leetcode"
Output: "leotcede"

Constraints:
1 <= s.length <= 3 * 105
s consist of printable ASCII characters.
*/


function reverseVowels(s) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    const indexes = [];
    const letters = [];

    for (let i = 0; i < s.length; i++) {
        if (vowels.has(s[i].toLowerCase())) {
            indexes.push(i);
            letters.push(s[i]);
        }
    }

    let p1 = 0;
    let p2 = letters.length -1;
    const result = s.split('');

    while (p1 < indexes.length && p1 >= 0) {
        const index = indexes[p1];
        const letter = letters[p2];
        result[index] = letter;
        p1++;
        p2--;
    }
    return result.join('');
}

console.log(reverseVowels('IceCreAm'));
console.log(reverseVowels('leetcode'));