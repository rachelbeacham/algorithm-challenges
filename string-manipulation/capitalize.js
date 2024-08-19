/* Define a function that returns the given word, but with its first character
uppercased and the rest lowercased. */

function capitalize(word) {
  const tail = word.slice(1);
  return word[0].toUpperCase() + tail.toLowerCase();
}

const map1 = new Map();
map1.set('a', 1);
map1.set('b', 2);
map1.set('c', 3);
console.log(map1.get('a'));
// Expected output: 1
map1.set('a', 97);
console.log(map1.get('a'));
// Expected output: 97
console.log(map1.size);
// Expected output: 3
map1.delete('b');
console.log(map1.size);
// Expected output: 2

console.log(map1.has('a'));
console.log(map1.has('z'));
console.log(map1.get('z'));
map1.forEach((value, key) => {
  console.log('key: ', key, ' value: ', value);
});
console.log(Array.from(map1.keys()))
console.log(Array.from(map1));
//expected output: ['a', 'c']

map1.clear();
console.log(map1.size);


console.log(Math.floor(5.95));
// Ex       pected output: 5

console.log(Math.ceil(12.12));
//Expected output: 13


console.log(Math.max(-1, -3, -2));
// Expected output: -1
const array1 = [1, 3, 2];
console.log(Math.max(...array1));
// Expected output: 3

console.log(Math.round(0.9));
// Expected output: 1
console.log(Math.round(5.95), Math.round(5.5), Math.round(5.05));
// Expected output: 6 6 5

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
console.log(getRandomInt(3));
// Expected output: 0, 1 or 2
console.log(getRandomInt(1));
// Expected output: 0
console.log(Math.random());
// Expected output: a number from 0 to <1
