let myString = "EElllzzzzzzzeroo";
let str = myString
  .split("")
  .filter((ele, index, arr) => {
    return arr.indexOf(ele) === index;
  })
  .join("");
console.log(str);

let str2 = myString
  .split("")
  .filter((ele, index, arr) => {
    return ele !== arr[index - 1];
  })
  .join("");
console.log(str2);

let str3 = [...new Set(myString)].join("");
console.log(str3);

let str4 = myString.split("").reduce((acc, curr) => {
  return acc.includes(curr) ? acc : acc + curr;
});
console.log(str4);
