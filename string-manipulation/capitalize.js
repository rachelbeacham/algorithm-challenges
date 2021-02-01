/* Define a function that returns the given word, but with its first character
uppercased and the rest lowercased. */

function capitalize(word) {
  const tail = word.slice(1);
  return word[0].toUpperCase() + tail.toLowerCase();
}
