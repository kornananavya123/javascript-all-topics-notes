let btn = document.getElementById("btn");

btn.addEventListener("click",function(){
  let input = document.getElementById("movie");

    //  1.make an object from XMLHttpRequest using new keyword
    let xhr = new XMLHttpRequest();

    let url = `http://www.omdbapi.com/?s=${input.value}&apikey=53b4ed65`;  // input url we give


    // 2.you have open api with a GET method
    xhr.open("GET",url);

    // xhr.open("GET",  "https://www.omdbapi.com/?s=thor&apikey=53b4ed65"); //api call

    xhr.responseType = "json"


  // 3.you have added a event load listener, to console the response
 
  xhr.addEventListener("load", function(){
    //console.log(xhr.response);
    console.log(typeof xhr.response);
    console.log(xhr.response.Search[0].poster)

    // IF WE WANT ALL THE IMAGES WE ACN WRITE FOR LOOP
    for (let i=0; i < xhr.response.Search.length; i++) {
   let image = document.createElement("img");

   image.classList.add("movie-card");
    image.src = xhr.response.Search[i].Poster;
    
    document.body.appendChild(image);
    }

   // let p = document.createElement("p");

   // p.innerText =xhr.response;
   // p.innerText = JSON.stringify(xhr.response,null,2); // indentation means space thatswhy we write null,2
   // document.body.appendChild(p);
   });

   xhr.addEventListener("error",function(){
    let p = document.createElement("p");
    p.innerText = " failed to call and get data from api";
    document.body.appendChild(p);
   });

  // 4.you have send the request
  xhr.send();  // send a request
  });