function lol(){
    alert("TEST");   
}


$(document).keypress(function(e){
    var checkWebkitandIE=(e.which==26 ? 1 : 0);
    var checkMoz=(e.which==122 && e.ctrlKey ? 1 : 0);

    if (checkWebkitandIE || checkMoz) $("body").append("<p>ctrl+z detected!</p>");
});