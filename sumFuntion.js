const arr = [3, 2, 1, 100];
let sum = 0;
const mySum = arr.forEach((item) => {
  sum = sum + item;
  return sum;
});
console.log(sum);

const user = {
    fname : "Puja"
    lname: "Thapa"
    address: "Nepal"
    phone:"9867677---"
}