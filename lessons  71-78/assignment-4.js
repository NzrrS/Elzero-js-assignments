let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];
let reverseFilter = numsAndStrings
  .filter((ele) => !isNaN(ele))
  .map((ele) => -ele);
console.log(reverseFilter);

// [-1, -10, 10, 20, -5, -3]
