function f1(callback) {
    callback("india", 1000, function f3(y) { // inside function we called arguments thatswhy we called f3
     console.log("inside f3()");
     console.log("Line 4 => ", y);
     y();
    });
}

f1(function f2(country,age,x) {
    console.log(country);  // india
    console.log(age);    // 1000

   // console.log(x);   // f3 function called
   
    x(function f4() {
        console.log("inside f4()");
    });
});
