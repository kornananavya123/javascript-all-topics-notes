var a = 10;

function f1() {
    console.log("inside f1()");

    function f2() {
        console.log("inside f2()");
    }
    f2();  // only inside f2 function will be executed  bcz f2 inside in f1 outside will not be executed
}
f1();     // f1 will be executed