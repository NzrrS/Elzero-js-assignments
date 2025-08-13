// Method One
let objMethodOne = {
  property: "Methode One",
};
console.log(objMethodOne.property); // "Method One"

// Method Two
let objMethodTwo = Object.create(objMethodOne);
objMethodOne.property = "Method Two";

console.log(objMethodTwo.property); // "Method Two"

// Method Three
let objMethodThree = new Object();
objMethodThree.property = "Method Three";

console.log(objMethodThree.property); // "Method Three"

// Method Four
let objMethodFour = Object.assign({}, objMethodOne);
objMethodFour.property = "Method Four";

console.log(objMethodFour.property); // "Method Four"
