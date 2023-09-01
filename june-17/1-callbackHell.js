// this is set name function inside this setname function first thing i hava variable name and vaalue and it is also
// expecting callback also callback is also just function 

function setName(callback) {
    let name = "navya" ;       
    callback(name);
}

function greet(name,callback) {
    console.log("Happy Diwali = ", name);
    callback(name)
}

function askForGifts(name, callback) {
    console.log(`where is gifts for ${name}`)
    callback(name);
}

function returnGifts(name) {
    console.log(`Here is your Gifts ${name} -> https://gifts.com/6792 `)
}

setName(function (name) {
    greet(name, function (name) {
        askForGifts(name, function(name) {
            returnGifts(name);
        })
    });
});