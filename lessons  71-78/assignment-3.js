let myArray = ["E", "l", "z", ["e", "r"], "o"];
let answer = myArray.reduce((acc, curr, arr) => {
  if (Array.isArray(curr)) {
    return acc + curr.join("");
  } else {
    return acc + curr;
  }
});
console.log(answer);
