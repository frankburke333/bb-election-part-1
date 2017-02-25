$(document).ready(function() {

  $.ajax({
    url: 'https://bb-election-api.herokuapp.com/',
    method: 'GET',

  }).done(function(data){
    console.log(data);


    for(var i=0; i < data.candidates.length; i++) {
      $('#list').append('<li> Name: ' + data.candidates[i].name + '</li>')
      $('#list').append('<li> Votes: ' + data.candidates[i].votes + '</li>')
      $('#list').append('<form method="POST" class="vote" action="https://bb-election-api.herokuapp.com/vote"><input type="submit" > <input type="hidden" name="id" value='+data.candidates[i].id+'></form><br>')
    }
    $('.vote').submit(function(event){
        event.preventDefault();
        var id = $(this).children('input[type=hidden]').val();
        $.ajax({
          url: 'https://bb-election-api.herokuapp.com/vote',
          method: 'POST',
          data: {id: id}

        }).done(function(data){
            console.log(data);
            location.reload();

        }).fail(function(jqXHR, textStatus, errorThrown){
            console.log('Ajax Request Failed');
            console.log(jqXHR);

        }).always(function(){
            console.log('Ajax Request Sent');
        });


    });


  });

});
