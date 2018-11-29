function SaveCanvas(){
  // html2canvas($("#allContent"), {
  //     onrendered: function(canvas) {
  //       saveAs(canvas.toDataURL(), 'canvas.png');
  //     }
  //   });

   html2canvas($("#allContent"), {
      allowTaint: true,
      onrendered: function(canvas) {
        saveAs(canvas.toDataURL(), 'falconscript.png');
      }
    });
}

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