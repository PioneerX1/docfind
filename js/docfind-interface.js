var DocFind = require('./../js/docfind.js').docFindModule;

var getDoctorList = function(listing) {
  var doctorName = listing.profile.first_name + " " + listing.profile.last_name + ", " + listing.profile.title;
  var doctorBio = listing.profile.bio;
  // $('#doc-name').append('<li>'+doctor+'</li>');

  $('#doc-result').append('<div class="thumbnail">'+'<h4>'+doctorName+'</h4>'+'<p>'+doctorBio+'</p>'+'</div>');
};


//UI Form Input Logic
$(document).ready(function() {
  var newDocFind = new DocFind(); //initialize object
  $('#symptom-form').submit(function(event) {
    event.preventDefault();
    var symptom = $('#input-symptom').val();
    newDocFind.getDoctors(symptom, getDoctorList);
  });
});
