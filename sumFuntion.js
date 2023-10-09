
const arr = [3, 2, 1, 100];
let sum = 0;
const mySum =arr.forEach((items)=>{
    sum = sum + items;
    return sum;
}) 
console.log(sum);
