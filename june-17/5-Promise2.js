console.log("start")

function f2() {
    return new Promise(function (resolve,reject) {
        resolve("Navya");
    });
}

let x = f2();
// .then is used to get resolve value from the promise objects
// callback inside .then will be executed only when you promise is resolved or fullfilled
//! callback inside .then will be not executed if promise is in pending or in reject status 

// x.then(function (value) {
  //  console.log(value);
// });

// .then chaining....
 x.then(function (value) {
    console.log(value);
    return "sagar";
})
  .then(function (value) {
    console.log("value =>", value);
    return "vada pav";
})
   .then(function (value) {
    console.log("line 27", value);
    return "virat";
})
   .then(function (value) {
    console.log("line 27", value);
    return "Dk";
})
   .then(function (value) {
    console.log("line 27", value)
});


console.log("end");