/*

Initial thoughts, check javascript documentation to see if already a built in string method
or array method that does reverse. 

There is an array reverse method we can use. 
node -e "console.log([0,1,2,3].reverse())"
[ 3, 2, 1, 0 ]


*/

function reverseString(str) {
  if (typeof str !== 'string') return 'Error: Not a string'
  if (str === '') return str
  const strArray = Array.from(str);
  const reversedArray = strArray.reverse();
  const reversedStr = reversedArray.join('');
  return reversedStr
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;

// Please add your pseudocode to this file
// And a written explanation of your solution
