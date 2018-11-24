var printedString = "";

var fontSize = 20;

var currentCss = "";



function toggleCssForText(cssName) {
    currentCss = cssName;
}

function decreaseFontSize(){
    fontSize = fontSize - 5;

}

function increaseFontSize(){
    fontSize = fontSize + 5;
}

function check_multifile_logo(file) {
    var extension = file.substr((file.lastIndexOf('.') + 1))
    if (extension === 'jpg' || extension === 'jpeg' || extension === 'gif' || extension === 'png' || extension === 'bmp') {
        return true;
    } else {
        return false;
    }
}



$(document).keyup(function(e) {
    console.log();
    if (e.keyCode == 8) {
        console.log();
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
        console.log("");
        elementToAdd = elementForNumber(e);
    } else {
        console.log("UNSUPPORTED char:" + e.keyCode);
        //return;
    }

    //add the element we got for the key.

    //if it is a number, add corresponding image to site
    var container = document.querySelector(".coolio");
    var topMargin = getHeightForPreviousString(printedString);
    elementToAdd.style.cssText = "display:inline; position:relative;top:" + topMargin + "px;font-size:" + fontSize +"px";
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
    var isNumber = keyCode >= 65 && keyCode <= 90 
    || keyCode == 32 
    || keyCode == 190 
    || keyCode == 222 
    || keyCode == 186 
    || keyCode == 187
    || keyCode == 107
    || keyCode == 63;

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
    newDiv.className = currentCss;
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
    var twoPointFive = ['a','å', 'ä', 'ö','h', 'j', 'k',];
    var negativeTwoPointFive = ['i', 'y'];
    var one = ['f', 'l', 'm', 'n', 's','x', 'z'];
    var negativeOne = ['b', 'c', 'd', 'e', 'g', 'p', 't', 'v'];
    var onePointFive = [];
    var zero = ['q', 'r', 'w', 'u','.'];
    var negativeJump = ['+',];
    var positiveJump = ['=','?'];

    //lägg till höjd för siffror. 



    if (twoPointFive.includes(character)) {
        height = 2.7 * fontSize;
    } else if (negativeTwoPointFive.includes(character)) {
        height = 2.5 * fontSize * (-1);
    } else if (one.includes(character)) {
        height = 1.7 * fontSize;
    } else if (negativeJump.includes(character)) {
        height = 8 * fontSize;
    } else if (positiveJump.includes(character)) {
        height = 8 * -fontSize;
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

$(function() {
$("#btnSave2").click(function() {
    html2canvas($("#widget"), {
      onrendered: function(canvas) {
        saveAs(canvas.toDataURL(), 'canvas.png');
      }
    });
  });

  function saveAs(uri, filename) {
    var link = document.createElement('a');
    if (typeof link.download === 'string') {
      link.href = uri;
      link.download = filename;

      //Firefox requires the link to be in the body
      document.body.appendChild(link);

      //simulate click
      link.click();

      //remove the link when done
      document.body.removeChild(link);
    } else {
      window.open(uri);
    }
  }
});


//    html2canvas(document.querySelector("#capture")).then(canvas => {
//    document.body.appendChild(canvas)
//    });

//    $('#save_image_locally').click(function(){
//    html2canvas($('#capture'), 
//   {
//     onrendered: function (canvas) {
//      var a = document.createElement('a');
        // toDataURL defaults to png, so we need to request a jpeg, then convert for file download.
//      a.href = canvas.toDataURL("image/jpeg").replace("image/jpeg", "image/octet-stream");
//     a.download = 'somefilename.jpg';
//      a.click();
//     }
//   });
//  });


//}
   