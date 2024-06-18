// must know Object
// static
// entries, keys, values

// must know Object
// static
const id={
    name: "govinda sahoo",
    hair: "black",
    age: "age",
  };
  
  // entries
  
  for (const [key, value] of Object.entries(id)) {
    console.log(`${key}: ${value}`);
  }
  //entries
  const entries=Object.entries(id);
  console.log(entries);
  
  //keys,
  const keys=Object.keys(id);
  console.log(keys);
  keys.forEach((k)=>{
      console.log(k);
  })
  //values
  const values=Object.values(id);
  console.log(values);
  values.forEach((v) => console.log(v))