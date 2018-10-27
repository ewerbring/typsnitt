function lol(){
    alert("TEST");   
}


$(document).keypress(function(e){
    //when key is pressed, add new letter to site
    var container = document.querySelector(".coolio");
    var newDiv = document.createElement("DIV"); 
    newDiv.innerHTML = "lol";
    newDiv.style.cssText = "display:inline; position:relative;";
    container.appendChild(newDiv);
    //position said letter correctly
      console.log("pressed: " + e.key);
});