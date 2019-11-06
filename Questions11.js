//Problem statement
//Given an Array of strings, use Array#reduce to create an object 
//that contains the number of times each string occured in the array.

var inputWords = ['Apple', 'Banana', 'Apple', 'Durian', 'Durian', 'Durian']

function countWords(arr) {
  return arr.reduce(function(countMap, word) {
    // your implementation here 
    countMap[word]=++countMap[word]||1
    return countMap
  }, {}) // second argument to reduce initialises countMap to {}
}
console.log(countWords(inputWords))