// complete the given function

function palindrome(str){

 var formattedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');

  // Compare characters from both ends of the string
  for (var i = 0, j = formattedStr.length - 1; i < j; i++, j--) {
    if (formattedStr[i] !== formattedStr[j]) {
      return false; // Characters don't match, not a palindrome
    }
  }

  return true; // All characters match, it's a palindrome
}

// Example usage
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("RaceCar")); // true
console.log(isPalindrome("raceCAR")); // true
console.log(isPalindrome("hello")); // false
module.exports = palindrome
