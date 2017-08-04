var DocFind = require('./../js/docfind.js').docFindModule;

var getDoctorList = function(listing) {
  var doctorName = listing.profile.first_name + " " + listing.profile.last_name + ", " + listing.profile.title;
  var doctorBio = listing.profile.bio;
  var healthgradesLink = "http://www.healthgrades.com/usearch?what=" + listing.profile.first_name + "%20" + listing.profile.last_name + "%2C%20" + listing.profile.title;

  $('#doc-result').append('<div class="thumbnail">'+'<a href="'+healthgradesLink+'" target="_blank">'+'<h4>'+doctorName+'</h4>'+'</a>'+'<div>'+'<img class="profile-pic" src="'+listing.profile.image_url+'">'+'</div>'+'<p>'+doctorBio+'</p>'+'</div>');
};


//UI Form Input Logic
$(document).ready(function() {
  var newDocFind = new DocFind(); //initialize object
  $('#symptom-form').submit(function(event) {
    event.preventDefault();
    $('#doc-result').empty();
    var symptom = $('#input-symptom').val();
    $('#input-symptom').val("");
    $('#search-term').text(symptom);
    $('#result-header').show();
    newDocFind.getDoctors(symptom, getDoctorList);
  });
});
