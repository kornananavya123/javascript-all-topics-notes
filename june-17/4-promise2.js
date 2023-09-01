console.log("Start");

// it will return a function return keyword using for return inside new promises we have call back function
// we make object name new new syntax new promise then write function in inside
// passing a function and two argumnets resove and reject
// it will making new promise means it will make a new object
// promise is a class it will make a object name is new
function f1() {
    return new Promise(function (resolve,reject) {
      // resolve("Bavya"); i want to resolve not immediately after 2 sencs i will resolve it so i use settimeout
      setTimeout(function () {
        resolve("Navya");
      }, 2000);
    });
}

let x = f1();
 console.log(x);

console.log("end");
