function getMeetups(){
	var api_key = "50722e1d56c194e61763a2ee1e4535";
	var url = "https://api.meetup.com/2/";
	var method = "open_events"
	$.ajax({
		url: url + method,
		data: {
		  key: api_key,
		  city: 'Philadelphia',
          state: "PA",
          country: "us",
		  topic: 'JavaScript'
		},
		crossDomain: true,
		dataType: 'jsonp',
		type: "GET",
		success: function (data) {
		    console.log(data)
		},
		error: function(data) {
			console.log("Error", data);
		}				
	});
}
$(document).ready(function(){
    $('.box').bind({
        click: function() {
          $(this).css('background-color', 'green');
          $(this).html('Clicked!');
          $(this).css("width", "400px");
        },
        hover: function() {
          $(this).css('background-color', 'purple');
          $(this).html('Hi!');
        }
    });
    $('#calculate').submit(function(event){
        var givenAge = $('#age').val();
        var givenSnack = $('#snack').val();
        var givenPerDay = $('#times-per-day').val();
        $('#lifetime-supply').html(calculate(givenAge, givenSnack, givenPerDay));
        return false;
    });
    $('#favorite').submit(function(event){
        var givenThing = $('#thing').val();
        favoriteThings(givenThing);
        return false
    });
    $('#my-friends').submit(function(event){
       var name = $('#friend-name').val();
       var age = $('#friend-age').val()
       var friend = {name: name, age:age};
        myFriends(friend);
        return false;
    });

    getMeetups();
})

function calculate(age, snack, perDay){
    var oldAge = 96;

    var days = (oldAge - age) * 356;
    var total = perDay * days;
    if(total > 40000){
        return "You will need " + total + " of " + snack + " to last you until the ripe old age of " + oldAge + ". Wow! That's a lot!";
    }else{
        return "You will need " + + total + " of " + snack +  " to last you until the ripe old age of " + oldAge + ". You seem pretty reasonable";
    } 
}

function favoriteThings(thing){
    $('#favorite-things').append('<p>'+ thing +'</p>');
}
function myFriends(friend){
    var resultParagraph = $('<p>' + describeFriend(friend) + '</p>');
    $("#my-friends").append(resultParagraph);
}
function describeFriend(friend){
    return "My friend " + friend.name + " is " + friend.age + " years old. ";
}