/**
 * Write a function named containsDuplicate that takes an array of integers (nums) as input 
 * and returns true if any value appears at least twice in the array, and false if every element is distinct.
 *
 * Problem: Given an integer array nums, return true if any value appears at least twice in the array, 
 * and return false if every element is distinct.
 *
 * Examples:
 * - containsDuplicate([1,2,3,1]) → true
 * - containsDuplicate([1,2,3,4]) → false  
 * - containsDuplicate([1,1,1,3,3,4,3,2,4,2]) → true
 */

const containsDuplicate = (nums) => {
  //write your code here

};

// Export the function for testing
module.exports = { containsDuplicate };

// Example usage (commented out to avoid interference with tests)
// console.log(containsDuplicate([1,2,3,1])); // → true
// console.log(containsDuplicate([1,2,3,4])); // → false
// console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2])); // → true

/* note 
PEDAC

Problem:
We need to determine if any number appears at least twice in the array
If yes number did repeat return true
If no number did not reapeat eturn false

Example:
console.log(containsDuplicate([1,2,3,1])); // → true because number 1 reapeated 
console.log(containsDuplicate([1,2,3,4])); // → false because no number reapeated 
console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2])); // → true because multiple number repeated

Data structure 
use object store counts of numbers we have seen

Algorithm
Create an empty object counts = {}
Loop through each number in the array
For each number: If it already exists in the object → return true 
Otherwise false

Code:

const containsDuplicate = (nums) => {
  //write your code here
  const seen = {}

  for (let i = 0; i < nums.lenght; i++){
    const num
  }

};

*/