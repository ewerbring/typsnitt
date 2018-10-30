$(document).ready(function(){
    var letters = ['0', '1', '2','3','4', '5', '6','7','8', '9'];
    letters = letters.split("");
    
    $(window).keydown(function(e){
        key = e.which - 65; //makes a-z = 0-27
        key = letters[key];
        $('img[src="' + key + '.jpg"]').show();
    });
});

function getHeightForPreviousString(previousString) {

    var totalHeight = 0;

    for (var i = 0; i < previousString.length; i++) {
        var thisChar = previousString.charAt(i)
        var thisCharHeight = heightForCharacter(thisChar);
        totalHeight = totalHeight + thisCharHeight;
    }

    return totalHeight;
}

function heightForImage(character) {
    var height = 0;
    var imageHigh = ['0', '1', '2','3','4', '5', '6','7','8', '9'];
    console.log('character: ' + character);
    if (twoPointFive.includes(character)){
        height = 2.5* fontSize;
    } else if (negativeTwoPointFive.includes(character)) {
        height = 2.5* fontSize * (-1);
    } else if (one.includes(character)) {
        height = fontSize;
    } else if (negativeOne.includes(character)){
        height = -fontSize;
    } else if (onePointFive.includes(character)){
        height = 1.5 * fontSize;
    } else if (imageHigh.includes(character)){
        height = 2.5 * fontSize;
    } else if(zero.includes(character)){
        height = 0;
    } else {
        console.error("UNSUPPORTED CHARACTER FAIL FAIL FAIL: " + character);
  