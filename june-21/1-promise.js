function placeOrder(food) {
    return new Promise(function (resove,reject) {
        console.log(`your ${food} is placed`);
        resolve(food);
    });
}

function completePayment(food) {
    return new Promise(function (resolve,reject){
        console.log(`payment is done for ${food}`);
        resolve(food);
    })
}

function deliveryFood(food) {
    return new Promise(function (resolve,reject){
        console.log(`delivery is done for ${food}`);
        resolve(food);
    })
}

function enjoyFood(food) {
    console.log(`Enjoying my ${food}`);
}

let x = placeOrder("Burger") 

x.then(function (value){
    return value;
})
 
.then(function (value){
    return value;
})
.then(function (value){
    return value;
})
 

