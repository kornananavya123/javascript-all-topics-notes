let x = `{"name":"harshit","address":"india"}`;

console.log(x);  //{"name":"harshit","address":"india"}

console.log(typeof x);   //string

let y = JSON.parse(x);

console.log(y);  // { name: 'harshit', address: 'india' }
console.log(typeof y); //object