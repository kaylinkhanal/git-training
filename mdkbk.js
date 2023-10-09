const person = {
    name: "Kiya",
    age: 27,
    city: "Lalitpur"
  };
  
  const keysArray = Object.keys(person);
  const valuesArray = keysArray.map(key => person[key]);
  
  console.log(keysArray);   
  console.log(valuesArray); 