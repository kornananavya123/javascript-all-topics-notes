let a = 10;
let b = " 10";

if (a == b) {
    // == it will check content
    console.log("if ->");
}else {
    console.log("else ->");
}

if (a === b) {
    // strictly equal to === a is number and b is string thats why it print else if
    // === it will check content and as well ass datatype also 
    console.log(" first if ->");
}else {
    console.log("else if  ->");
}