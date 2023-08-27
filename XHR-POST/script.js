let btn = document.getElementById("btn");

btn.addEventListener("click",function(){

    //  1.make an object from XMLHttpRequest using new keyword
    let xhr = new XMLHttpRequest();

    // 2.you have open api with a GET method
    //xhr.open("GET","https://jsonplaceholder.typicode.com/posts");
    xhr.open("POST","https://jsonplaceholder.typicode.com/posts");


    xhr.responseType = "json"
    xhr.setRequestHeader("Content-Type", "appilication/json");

 // 3.you have added a event load listener, to console the response
 
  xhr.addEventListener("load", function(){

  let p = document.createElement("p");

 p.innerText = JSON.stringify(xhr.response,null,2); // indentation means space thatswhy we write null,2

   document.body.appendChild(p);
   });

   xhr.addEventListener("error",function(){
    let p = document.createElement("p");
    p.innerText = " failed to call and get data from api";
    document.body.appendChild(p);
   });

  // 4.you have send the request
  let body = {
    userId: 11,
    id: 102,
    title:
      "this is my title",
    body: "this is my body",
  };  
  xhr.send(JSON.stringify(body));
  });