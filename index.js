const num = [2,5,4,6,7,8]

let sum =0;
num.map((item)=> {
  return sum += item
})
console.log(sum)