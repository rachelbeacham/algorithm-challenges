/* Define a function that returns a boolean indicating whether or not all
characters in a word are lower cased */

function isLowerCased(word) {
  if (word === word.toLowerCase()) {
    return true;
  }
  return false;
}
