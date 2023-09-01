class Product {
    constructor(name,price,desc,company) {
        // every objection creation there will be a constructor called
     // why we use this.name inside class we will write this.name outside of the class we wont write   
        this.name = name;
        this.price = price;
        this.desc = desc;
        this.company = company;
    }
    // method name
    printProductName() {
     return this.name;
    }
    
    printProductInfo() {
        console.log("product Name=>", this.name)
        console.log("product Price=>", this.price)
        console.log("product desc =>", this.desc)
        console.log("product company =>", this.company)
    }

    printRandomMessage(greet) {
        console.log("happy", greet);
    }

}

const obj1 = new Product("IPhone", 700000, "apple product", "apple");
const obj2 = new Product("galaxy f41", 160000, "samsung product", "samsung");


// console.log(obj1);
// console.log(obj2);

// let name = obj1.printProductName(); // object.methodName
// let name2 = obj2.printProductName();

// obj1.printProductInfo();
// obj2.printProductInfo();

obj1.printRandomMessage("Diwali");
obj1.printRandomMessage("Holi");
obj1.printRandomMessage(" New Year");

