let a = 20;
function outerFunction() {
    let a = 30;
    function innerFunction() {
        let a = 40;
        function f1() {

            console.log(a); 
        }

        return f1;
    }
    return innerFunction;
}
  
let x = outerFunction();

let y =x()

y();