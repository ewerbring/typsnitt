function lol() {
    for (var i = 0; i <= 20; i++) {
        console.log(i);
    }
}

var printedString = "asdasd";

var fontSize = 40;

$(document).keypress(function(e) {
    //when key is pressed, add new letter to site
    var container = document.querySelector(".coolio");
    var newDiv = document.createElement("DIV");
    newDiv.innerHTML = e.key;
    var topMargin = getHeightForPreviousString(printedString);
    newDiv.style.cssText = "display:inline; position:relative;top:" + topMargin + "px;";
    container.appendChild(newDiv);
    //position said letter correctly
    console.log("pressed: " + e.key);
    printedString = printedString + e.key;
});

function getHeightForPreviousString(previousString) {
    //a angled up
    //d straight right 
    //c straight down
    //l straight up
    //r angled down

    var totalHeight = 0;

    for (var i = 0; i < previousString.length; i++) {
        var thisChar = previousString.charAt(i)
        var thisCharHeight = heightForCharacter(thisChar);
        totalHeight = totalHeight + thisCharHeight;
    }

    return totalHeight;
}

$("textarea[name=txt]").keypress(function(e){
    var keycode =  e.keyCode ? e.keyCode : e.which;

    if(keycode == 8){ // backspace
        // do somethiing
        alert(keycode);
    }

    if(keycode == 46){ // delete
        // do somethiing
        alert(keycode);
    } 

});


function heightForCharacter(character) {
    var height = 0;
    if (character == 'a') {
        height = -fontSize;
     }
    if (character == 'c') {
        height = 2.5*fontSize;
    }
      if (character == 'e') {
        height = -fontSize;
    }
    if (character == 'g') {
        height = 2.5*fontSize;
    }
      if (character == 'h') {
        height = -fontSize;
    }
       if (character == 'i') {
        height = fontSize;
    }
       if (character == 'j') {
        height = -fontSize;
    }
       if (character == 'k') {
        height = 2.5*(-fontSize);
    }
       if (character == 'l') {
        height = 2.5*(-fontSize);
    }
     if (character == 'm') {
        height = fontSize;
    }
      if (character == 'n') {
        height = -fontSize;
    }
      if (character == 'o') {
        height = -fontSize;
    }
      if (character == 'q') {
        height = 1.5*fontSize;
    }
    if (character == 'r') {
        height = fontSize;
    }
    if (character == 's') {
        height = 2.5*fontSize;
    }
    if (character == 't') {
        height = 2.5*(-fontSize);
    }
     
    if (character == 'u') {
        height = -fontSize;
    }
    if (character == 'v') {
        height = 2.5*fontSize;
    }
    if (character == 't') {
        height = -fontSize;
    }
     if (character == 'w') {
        height = -fontSize;
    }
    if (character == 'x') {
        height = -fontSize;
    }
    if (character == 'y') {
        height = 2.5*(-fontSize);
    }
    if (character == 'z') {
        height = -fontSize;
    }

    return height;
}