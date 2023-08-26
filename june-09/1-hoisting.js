// console.log(a);

// var a = 10;

// console.log(myVariable); // undefined

// var myVariable = "hello , hoisting"; //declaration hoisted

// console.log(myVariable); // hello, hoisting

// var a = 10;

// function f1() {
   //  var a = 20;
   // console.log(a)
// }

// f1(); //20
// console.log(a); // 10

let a = "harshit";

function f1() {
    console.log(a);
    let b = "pavan";
    console.log(b);
}

console.log(a);

f1();