$(document).ready(function(){
    var letters = "abcdefghijklmnopqrstuvwxyz";
    letters = letters.split("");
    
    $(window).keydown(function(e){
        key = e.which - 65; //makes a-z = 0-27
        key = letters[key];
        $('img[src="' + key + '.jpg"]').show();
    });
});