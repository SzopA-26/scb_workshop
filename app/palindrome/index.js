// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function reverseString(str) {
  return str.split("").reverse().join("");
}

function palindrome(str) {
  let str1, str2
  if (str.length % 2 == 0) {
    str1 = str.substr(0, str.length / 2)
    str2 = str.substr(str.length / 2)
  } else {
    str1 = str.substr(0, str.length / 2)
    str2 = str.substr(str.length / 2 + 1)
  }

  return str1 === reverseString(str2)
}

module.exports = palindrome;
