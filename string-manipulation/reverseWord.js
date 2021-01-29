/* Define a function that returns a JavaScript String containing the characters
of word in reverse order. */

function reverse(word) {
  let reverseWord = '';
  for (let i = word.length - 1; i >= 0; i--) {
    reverseWord += word[i];
  }
  return reverseWord;
}
