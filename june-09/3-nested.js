function outerFunction() {
    let a = 10;     // the 2'nd line to 17 would be parent scope
   // console.log(a);

   let name = "harshit";

    function innerFunction() {
        console.log(name);    // inner function will be local scope //1 to 17 all the function will be gloabl scope
      console.log(a);
    }

    return innerFunction;
}

let x = outerFunction();

x();