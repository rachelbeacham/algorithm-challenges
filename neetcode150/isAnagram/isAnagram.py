# Is Anagram - Easy

# Given two strings s and t, return true if the two strings are anagrams of each other, otherwise return false.

# An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

# Example 1:
# Input: s = "racecar", t = "carrace"
# Output: true

# Example 2:
# Input: s = "jar", t = "jam"
# Output: false

#SOLUTION 1
#if string lengths are not equal return false
#sort the string and check if they're equal
#Time Complexity:
  #comparing string lengths takes O(1) time
  #sorting each string takes O(n log n) x 2 time -- drop constant to O(n log n)
  #comparing sorted strings takes O(n) time
  #OVERALL TIME COMPLEXITY dominated by sorting - O(n log n)
#Space Complexity:
  #space is requred to store sorted string versions 2 x O(n) -- drop constant = O(n)
  #sorting algorithm typically requires O(n) space
  #OVERAL SPACE COMPLEXITY = O(n)
class Solution:
  def isAnagram(self, s: str, t: str) -> bool:
    if len(s) != len(t):
      return False
    return sorted(s) == sorted(t)

solution = Solution()
print(solution.isAnagram('racecar', 'carrace'))
print(solution.isAnagram('jar', 'jam'))


#SOLUTION #2
#use hash map (dictionary) to count character frequencies
#have a separate function to get char count dictionaries and call that function on each string
#compare the dictionaries
#TIME COMPLEXITY:
  # getCharCounts function takes O(n) time to go through each char in the string
  # isAnagram function:
    #O(1) time to compare string lengths
    #call getCharCounts on each string 2 x O(n) => O(n)
    #dictionary comparison takes O(n) time
  #OVERALL TIME COMPLEXITY = O(n)
#SPACE COMPLEXITY
  #getCharCounts function takes O(k) space to hold unique characters, worst case k = n the number of characters in the string (all unique)
  #isAnagram function calls getCharCounts twice, resulting in 2 dictionarys of O(n) space
    #O(n) + O(n) = O(n)
  #OVERALL SPACE COMPLEXITY = O(n)
class Solution2:
  def getCharCounts(self, s: str) -> dict:
      charCount = {}
      for char in s:
        if char in charCount:
          charCount[char] += 1
        else:
          charCount[char] = 1
      return charCount

  def isAnagram(self, s: str, t: str) -> bool:
    if len(s) != len(t):
      return False

    sCharCount = self.getCharCounts(s)
    tCharCount = self.getCharCounts(t)
    return sCharCount == tCharCount


solution2 = Solution2()
print(solution2.isAnagram('racecar', 'carrace'))
print(solution2.isAnagram('jar', 'jam'))
