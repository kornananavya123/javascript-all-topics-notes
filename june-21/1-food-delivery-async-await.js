function placeOrder(food) {
    return new Promise(function (resolve,reject) {
        console.log(`your ${food} is placed`);
        resolve(food);
    });
}

function completePayment(food) {
    return new Promise(function (resolve,reject){
        console.log(`payment is done for ${food}`);
        resolve(food);
    });
}

function deliveryFood(food) {
    return new Promise(function (resolve,reject){
        console.log(`delivery is done for ${food}`);
        resolve(food);
    });
}

function enjoyFood(food) {
    console.log(`Enjoying my ${food}`);
}

async function f1(food) {
  let a = await placeOrder(food);
  let b = await completePayment(a);
  let c = await deliveryFood(b);
  enjoyFood(c);

  return "Navya";
}

// f1("pizza");

let x = f1("pizza");

// console.log("line 35 =====>", x); // promise object

// we write return keyword thats why the value is navya 
// if we dont write return keyword we got the answer is undefined
x.then(function (value) {
    console.log("line 39 ===>", value);
});