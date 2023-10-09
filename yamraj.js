// sum function
const arr = [1, 2, 3];
let sum = 0;
arr.forEach((item) => {
  sum = sum + item;
});
console.log(sum);

// rest operator
const user = {
  name: "ram",
  address: "kathmandu",
  age: 22,
  code: "KY01P",
  pin: 44600,
};

const { pin, code, ...rest } = user;
console.log(rest);
