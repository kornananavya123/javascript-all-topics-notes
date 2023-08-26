//console.log(document);
//console.log(document.head);
//console.log(document.body);

//document.getElementById();
//document.getElementsByClassName();
//document.getElementsByTagName();

// let h1 = document.getElementById("heading");
// console.log(h1.innerText);

let p1 = document.getElementById("p1");
p1.innerText = " This is message para";
p1.style.color = "red";
p1.style.fontSize = "36px";

// document.getElementById("btn");
// .style.color = "pink";
//btn.style.fontSize = "36px";
// document.write("hello world!")

function modifyH1() {
    let h1 = document.getElementById("heading");
    console.log(h1);
    h1.style.color = "red";
    h1.style.visibility ="hidden";
}

