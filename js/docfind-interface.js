var DocFind = require('./../js/docfind.js').docFindModule;




//UI Form Input Logic
$(document).ready(function() {
  DocFind newDocFind = new DocFind(); //initialize object
  $('#symptom-form').submit(function(event) {
    event.preventDefault();
    var symptom = $('#input-symptom').val();

  });
});
