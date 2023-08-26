function outerFunction() {
    console.log("outer function...");

    function innerFunction() {
        console.log("inner functions..");
    }
    
     innerFunction();  // line no 8 printed innerfunction 

    console.log("at line 8....");
}

 outerFunction();
  // only outer function is printed  and line no 8 also printed
 // inner function not printed bcz just defining function will be not enough we need to call the function also
 // inner function is inside outerfunction curly braces only thatswhy not printed
 insideFunction(); // line no 17 inner function not printed
