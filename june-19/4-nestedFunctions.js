function outerFunction() {
    console.log("outer function")

    function innerFunction() {
        console.log("inner Function");

        function f1() {
            console.log("inside f1 function");
        }
        f1();
    }

   return innerFunction();
}

let x = outerFunction();
console.log("printing x ==>", x);


