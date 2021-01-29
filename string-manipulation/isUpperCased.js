/* Define a function that returns a boolean indicating whether or not all
characters in a word are uppercased */

function isUpperCased(word) {
  if (word === word.toUpperCase()) {
    return true;
  }
  return false;
}
