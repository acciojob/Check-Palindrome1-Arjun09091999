// complete the given function

function palindrome(str){
	const formattedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');

  // Reverse the formatted string
  const reversedStr = formattedStr.split('').reverse().join('');

  // Check if the reversed string is equal to the formatted string
  return formattedStr === reversedStr;

}
module.exports = palindrome
