 function outerFunction() {
    let number = 200;
    
    function innerFunction() {
        console.log(number);
    }

    return innerFunction(); 
 }

 let x = outerFunction();  // let x is its a return function

  console.log(x);

 