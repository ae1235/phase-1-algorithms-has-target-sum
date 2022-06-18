function hasTargetSum(array, target) {
  // Write your algorithm here
  for (i = 0; i<array.length; i++){
    let x = array[i]
    for (j = i + 1; j <array.length; j++){
      const sum = x + array[j]
      if (sum === target){
        return true
      }
    }
  }
  return false
}

/* 
  Write the Big O time complexity of your function here
  O(n^2)
*/

/* 
  Add your pseudocode here
  Create a variable for first number in array
  Iterate through array, adding each number to the first number
  If sum equals target, return true
  Create variable for second number in array
  Iterate through remainder of array, adding each number to the second number
  If sum equals target, return true
  Continue until you've gone through each number in the array (except the last one)
  Return false at the end of the function
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([-7, 10, 4, 8], 3));

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([1, 2, 3, 4], 5));

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([2, 2, 3, 3], 4));


  console.log("Expecting: false");
  console.log("=>", hasTargetSum([4], 4));


}

module.exports = hasTargetSum;
