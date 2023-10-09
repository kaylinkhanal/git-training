const arr = [3, 2, 1, 100];
let sum = 0;
const mySum = arr.forEach((item) => {
  sum = sum + item;
  return sum;
});
console.log(sum);
