 // these the 3 ways to create object the first one is 1) object literal
 //2 ) new object

// object :- its collection of key and value

let johninfo = { 
    nmae:"john",
    age: 21,
    address: "india",
    salary: 20000,
};
console.log(johninfo); // { nmae: 'john', age: 21, address: 'india', salary: 20000 }8i
console.log( typeof johninfo); // object

let Obj1 = new Object({
    name : "navya",
    age: 22,
    address: "india",
    salary: 233444,
});
console.log(Obj1);

let obj2 = new Object();
obj2.name = "navya";
obj2.age = 23;
obj2.address = "india";
obj2.salary = "45676";

console.log(Obj2);





