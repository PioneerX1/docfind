var apiKey = require('./../.env').apiKey;

function DocFind() {

}

DocFind.prototype.getDoctors = function(symptom, getDoctorList) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+symptom+'&location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=10&user_key='+apiKey).then(function(response) {
    response.data.forEach(function(listing) {
      getDoctorList(listing);
      console.log(JSON.stringify.response);
  });
  }).fail(function(error) {
    console.log("Search failed");
    // $('#fail').text(error.responseJSON.message);
  });
};




exports.docFindModule = DocFind;
