/*
20. Valid Parentheses
Easy

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 

Example 1:
Input: s = "()"
Output: true

Example 2:
Input: s = "()[]{}"
Output: true

Example 3:
Input: s = "(]"
Output: false

Example 4:
Input: s = "([])"
Output: true

Constraints:
1 <= s.length <= 104
s consists of parentheses only '()[]{}'.
*/

function isValid (s){
    let openers = new Set(['(', '[', '{']);
    const partnerMap = {
        ')': '(',
        ']': '[',
        '}': '{',
    }
    const openStack = [];
    for (let i = 0; i < s.length; i++) {
        if (openers.has(s[i])) {
            openStack.push(s[i]);
        } else {
            let close = openStack.pop();
            if (close !== partnerMap[s[i]]) {
                return false;
            }
        }
    }
    if (openStack.length > 0) return false;
    return true;
}

let s = "()[]{}";
console.log(`string ${s} is valid: ${isValid(s)}`)
s = "(]"
console.log(`string ${s} is valid: ${isValid(s)}`)
s = "([])"
console.log(`string ${s} is valid: ${isValid(s)}`)