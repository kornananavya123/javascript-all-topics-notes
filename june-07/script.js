// call the function
function removeAll() {
    let list =document.getElementById("list");
    // list.style.visibility = "hidden";
    //console.log(list.innerHTML);
    list.innerHTML = "";
}
// its removing the first child of the list
function removeFirstChild() {
    let list = document.getElementById("list");
    let firstChild = list.firstElementChild;
    list.removeChild(firstChild);

}
// its removing the last child of the list
function removeLastChild() {
    let list = document.getElementById("list");
    let lastChild = list.lastElementChild;
    list.removeChild(lastChild);
}

function removeHeader() {          // event handling
    let header = document.getElementById("logo");
    header.innerHTML="";
}
function addToList() {
    let input = document.getElementById("todo");
    

    // create elements list in js this is how create elemnts in js
    if(input.value && input.value.length > 2) {
    let li = document.createElement("li");
    li.innerText = input.value; // input value means it will increase the value

     let list = document.getElementById("list");
    list.appendChild(li);
    } else {
        alert("Empty Things Cant be added");
    }

}