const reverseString = function(string) {
  let newString = ''; 
  for(i = 1; i <= string.length; i++) {
    let lastCh = string[string.length - i];
    newString += lastCh;
  }
  return newString;
};

// Do not edit below this line
module.exports = reverseString;
