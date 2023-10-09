
const arr = [3, 2, 1, 100];
let sum = 0;
const mySumArr =arr.map((items)=>{
    sum = sum + items;
    return sum;
}) 
console.log(sum);
