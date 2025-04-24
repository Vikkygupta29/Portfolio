let button = document.querySelector("#icon");
let menubar =document.getElementById("menu");

button.addEventListener("click",function(){
    if(menubar.style.display=="block"){
        menubar.style.display="none";
    }

    else{
        menubar.style.display="block";
    }
})