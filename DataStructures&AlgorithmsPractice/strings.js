
function timeConversion(s) {
  // Write your code here
  const timeArray = s.split(":");
  let secondsSection = timeArray[timeArray.length - 1]
  let hourSection = timeArray[0];
  const isAM = secondsSection.includes('AM');
  secondsSection = secondsSection.slice(0, isAM ? secondsSection.indexOf('A') : secondsSection.indexOf('P'))
  if (isAM && hourSection === '12') hourSection = '00';
  if (!isAM && hourSection !== '12') {
    let newHour = parseInt(hourSection) + 12;
    hourSection = newHour.toString();
  }

  timeArray[0] = hourSection;
  timeArray[timeArray.length - 1] = secondsSection;
  return timeArray.join(':');

}

var reverse = function (x) {
  const isNegative = x < 0;
  const low = -Math.pow(2, 31);
  const hi = Math.pow(2, 31) - 1;
  const stringInt = x.toString();
  let reversed = '';
  const endIndex = isNegative ? 1 : 0
  for (let i = stringInt.length - 1; i >= endIndex; i--) {
    reversed += stringInt[i];
  }
  if (isNegative) reversed = '-' + reversed;
  if (Number(reversed) < hi && Number(reversed) > low) {
    return Number(reversed);
  }
  return 0;

};



//A string can be abbreviated by replacing any number of non-adjacent, non-empty substrings with their lengths.
//The lengths should not have leading zeros.
var validWordAbbreviation = function (word, abbr) {
  //internationalization
  //i5a11o1

  // setup two pointers and current number
  let wp = 0;
  let ap = 0;
  let number = 0;
  // loop while the pointers are within the string bounds
  while (wp < word.length && ap < abbr.length) {
    //if abbr char is a number...
    if (!isNaN(abbr[ap])) {
      if (number) {
        //if number already exists,
        //add the current number to the existing one by tuning it into
        //a string and back into a number
        let stringNum = number.toString();
        stringNum += abbr[ap];
        number = Number(stringNum);
      } else {
        number = Number(abbr[ap]);
        //leading 0s not accepted return false
        if (number === 0) return false;
      }
      //increment abbr pointer
      ap++;
    } else if (number > 0) {
      //if a number exists, increment the word pointer by that number
      wp += number;
      //reset number
      number = 0;
    } else {
      //check if the word and abbr chars match at their respective pointers
      if (word[wp] !== abbr[ap]) return false; // if not - return false
      //otherwise incremnt both pointers
      wp++;
      ap++;
    }
  }
  //once both pointers are out of bounds check if both pointers have reached the lengths of strings
  //subtract word length by any number that remains incase there was a number at the end of abbr
  return (ap === abbr.length && wp === word.length - number);
};


//Given a string s of '(' , ')' and lowercase English characters.
//Your task is to remove the minimum number of parentheses('(' or ')', in any positions)
//so that the resulting parentheses string is valid and return any valid string.

//Input: s = "lee(t(c)o)de)"
//Output: "lee(t(c)o)de"

//Input: s = "a)b(c)d"
//Output: "ab(c)d"

var minRemoveToMakeValid = function (s) {
  //keep track of the indexes we want to remove in a set.
  const indexesToRemove = new Set();
  let newString = "";
  //keep track of open parenthesis in a stack
  const parenStack = [];
  //loop through string
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      //if item is an open parenthesis push it onto the stack
      parenStack.push(i);
    } else if (s[i] === ')') {
      //if it is close parenthisis..
      if (parenStack.length === 0) {
        //if there are no open parenthesis on the stack, then we want to remove this index since it doesnt have a starting partner
        indexesToRemove.add(i);
      } else {
        //if there is a open partner pop it off the stack
        parenStack.pop();
      }
    }
    //if it is neither parenthesis, continue
  }
  if (parenStack.length > 0) {
    //if open parenthesis remain on the stack, they don't have closing partners and should be removed from the string
    //add these indexes to itemsToRemove
    parenStack.forEach((item) => indexesToRemove.add(item));
  }
  for (let i = 0; i < s.length; i++) {
    if (!indexesToRemove.has(i)) {
      //only push items onto the new string if the index is not in indexesToRemove
      newString += s[i]
    }
  }

  return newString;
}
