function isPalindrome(word) {
  // Write your algorithm here
  let splitString = word.split("")
  let reverseArray = splitString.reverse()
  let joinArray = reverseArray.join("")
  if (word === joinArray){
    return (true)
  }
  else{
    return (false)
  }
}

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
First i will use split method to split the string and chnage it to array
Then i will use (reverse) method to reverse the array
Then i will use (join) to join all elements of the array in string 
Finally check if the word equal to join array return true ,otherwise return false
  */ 

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));
  console.log("=>", isPalindrome("abba"));
  console.log("=>", isPalindrome("a"));
  

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
  console.log("=>", isPalindrome("ab"));
}

module.exports = isPalindrome;
