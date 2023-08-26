let btn=document.getElementById("btn");
btn.addEventListener("click", function(){

    let item = document.getElementById("item");

    if(item.value){
        let l1 = document.getElementsByTagName("li");
   console.log(l1);

   for(let i = 0; i < l1.length; i++) {
    if(item.value === li[i].innerText) {
        alert(`$(item.value)is already added..`);
        break;
    }
   }

    let li = document.createElement("li");
    li.innerText = item.value;

    let list = document.getElementById("list");
   list.appendChild(li);
    } else {
        alert("item value is already added");
    }

})

let clear = document.getElementById("clear");
clear.addEventListener("click", function(){
    let item = document.getElementById("item")
    item.value ="";
})

let deleteAll = document.getElementById("deleteAll");
deleteAll.addEventListener("click", function() {
    let list = document.getElementById("list");
    list.innerHTML ="";
})

let deleteFirst = document.getElementById("deleteFirst");
deleteFirst.addEventListener("click", function(){
    let list = document.getElementById("list");
    let firstChild = list.firstElementChild;
    list.removeChild(firstChild);
})

let deleteLast = document.getElementById("deleteLast");
deleteLast.addEventListener("click", function(){
    let list = document.getElementById("list");
    let lastChild = list.lastElementChild;
    list.removeChild(lastChild);
    
})