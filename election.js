$(document).ready(function() {

  $.ajax({
    url: 'https://bb-election-api.herokuapp.com/',
    method: 'GET',

  }).done(function(data){
    console.log(data);
    for(var i=0; i < data.candidates.length; i++) {
      $('#list').append('<li> Name: ' + data.candidates[i].name + '</li>')
      $('#list').append('<li> Votes: ' + data.candidates[i].votes + '</li><br>')

    }

  });



});
