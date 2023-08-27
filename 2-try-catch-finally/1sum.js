function sum(a,b) {

    try {
    if(typeof a == "number" && typeof b === "number") {
    console.log(a + b);

} else {
    throw new Error("please give me number only")
}
   console.log("line 99999")

} catch (error) {
    console.log(error.message);

} finally {
    console.log("fgfghjkjkjkjkbnn ")
}
}
sum(10,20);