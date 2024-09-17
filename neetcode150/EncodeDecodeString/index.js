/*
String Encode and Decode - medium 
Design an algorithm to encode a list of strings to a single string. The encoded string is then decoded back to the original list of strings.

Please implement encode and decode

Example 1:

Input: ["neet","code","love","you"]

Output:["neet","code","love","you"]
Example 2:

Input: ["we","say",":","yes"]

Output: ["we","say",":","yes"]
Constraints:

0 <= strs.length < 100
0 <= strs[i].length < 200
strs[i] contains only UTF-8 characters.
*/

function encode (strs) {
    //encode the string with the length of the string followed by # proceeding the string
    let result = '';
    for (const str of strs) {
        result += `${str.length}#${str}`;
    }
    return result;
}

function decode (str) {
    const result = [];
    let i = 0;
    while (i < str.length) {
        let j = i;
        while (str[j] !== '#') {
            j++;
        }
        let strLen = parseInt(str.slice(i, j), 10);
        i = j + 1;
        j = i + strLen;
        let substring = str.slice(i, j);
        result.push(substring);
        i = j;
    }
    return result;
}

function checkDecodedIsCorrect (input, decoded) {
    if (input.length !== decoded.length) return false;
    for (let i = 0; i < input.length; i++) {
        if (input[i] !== decoded[i]) {
            return false;
        }
    }
    return true;
}

const input = ["neet","code","love","you"]
const encoded = encode(input)
console.log('encoded: ', encoded);
const decoded = decode(encoded);
console.log('decoded: ', decoded);
console.log('correct: ', checkDecodedIsCorrect(input, decoded));