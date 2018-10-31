var printedString = "";

var fontSize = 40;

$(document).keyup(function(e) {
    if (e.keyCode == 8) {
        console.log(e.keyCode);
        return;
    }

    //when key is pressed
    //check if its a letter or a number

    var keyCodeIsNumber = isKeyCodeNumber(e.keyCode);
    var keyCodeIsLetter = isKeyCodeLetter(e.keyCode);
    //if its a letter, add new letter to site
    //if it s anumber, add new image
    var elementToAdd;
    if (keyCodeIsLetter) {
        elementToAdd = elementForLetter(e);
    } else if (keyCodeIsNumber) {
        console.log("firing off img");
        elementToAdd = elementForNumber(e);
    } else {
        console.log("UNSUPPORTED char:" + e.keyCode);
        //return;
    }

    //add the element we got for the key.

    //if it is a number, add corresponding image to site
    var container = document.querySelector(".coolio");
    var topMargin = getHeightForPreviousString(printedString);
    elementToAdd.style.cssText = "display:inline; position:relative;top:" + topMargin + "px;";
    container.appendChild(elementToAdd);
    //position said letter correctly
    console.log("pressed: " + e.key);
    printedString = printedString + e.key;
});

function isKeyCodeNumber(keyCode) {
    var isNumber = keyCode >= 48 && keyCode <= 57;
    return isNumber;
}

function isKeyCodeLetter(keyCode) {
    var isNumber = keyCode >= 65 && keyCode <= 90;
    
    //var isNumber = keyCode = 32;
    //HÄR ÄR EN LURING!!!
    //ett lika med tecken TILLDELAR ett värde till en variabel. 
    //FÖR ATT KOLLA " är x lika md y" behöver man TVÅ likamedtecken. 
    //https://www.w3schools.com/js/js_comparisons.asp
    
    
    return isNumber;
}

function elementForLetter(e) {
    var newDiv = document.createElement("DIV");
    newDiv.innerHTML = e.key;
    return newDiv;
}

function elementForNumber(e) {
    var newImg = document.createElement("IMG");
    //bestäm rätt source file baserat på rätt knapp.
    newImg.src = e.key + ".JPG";
    newImg.className = "imageCoolio";
    console.log(newImg);
    return newImg;
}

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

// $("textarea[name=txt]").keypress(function(e){
//     console.log("LOLOLOL");
//     var keycode =  e.keyCode ? e.keyCode : e.which;

//     if(keycode == 8){ // backspace
//         // do somethiing
//         alert(keycode);
//     }

//     if(keycode == 46){ // delete
//         // do somethiing
//         alert(keycode);
//     } 

// });


function heightForCharacter(character) {
    var height = 0;
    var twoPointFive = ['c', 'g', 's', 'n', 'v'];
    var negativeTwoPointFive = ['k', 'l', 't', 'y'];
    var one = ['i', 'm', 'M', 'r'];
    var negativeOne = ['a', 'e', 'h', 'j', 'o', 'u', 't', 'x', 'z'];
    var onePointFive = ['q'];
    var zero = ['b', 'w', 'p', 'd', 'f', ' '];

    //lägg till höjd för siffror. 



    if (twoPointFive.includes(character)) {
        height = 2.5 * fontSize;
    } else if (negativeTwoPointFive.includes(character)) {
        height = 2.5 * fontSize * (-1);
    } else if (one.includes(character)) {
        height = fontSize;
    } else if (negativeOne.includes(character)) {
        height = -fontSize;
    } else if (onePointFive.includes(character)) {
        height = 1.5 * fontSize;
    } else if (zero.includes(character)) {
        height = 0;
    } else {
        // console.error("UNSUPPORTED CHARACTER in height FAIL FAIL FAIL: " + character);
    }

    return height;
}