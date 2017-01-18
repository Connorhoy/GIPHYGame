/* Javascript code for homework. */

// List of original topics.
var topics = ["Halo", "Call of Duty", "World of Warcraft", "League of Legends", "Battlefield 1"];
	
	// Function to call AJAX on button a click.
$(document).ready(function(){
	$("#halo-button").on("click", function() {
		console.log('button clicked');

		// QueryURL
	   var queryURL = "http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=halo";
	   var search = event.target.getAttribute('data-name');
	   $.ajax({
        url: queryURL,
        method: "GET",
        dataType: "JSON",
        data: { 
            	api_key: 'dc6zaTOxFJmzC',
                q: search,
                limit: 40,
            },
      	})

		.done(function(response) {


        		//  Saving the original image URL.
         var imageUrl = response.data.image_original_url;

        		// Creates a new image tag and element.
         for(var i = 0; i < 10; i++){
         var haloImage = $("<img>");

        		// This writes the link for the image, and if the image is not ava. it pulls the alt text of cat image.
         haloImage.attr("src", imageUrl);
         haloImage.attr("alt", "halo image");

        		// Prepending the image to the div.
         $("#images").prepend(haloImage);
          };
      });
	});

	$("#callofduty-button").on("click", function() {
		console.log("button clicked");

		var queryURL = "http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=callofduty"

		$.ajax({
			url: queryURL,
			method: "GET"
		})

		.done(function(response) {

		var imageUrl = response.data.image_original_url;

		var codImage = $("<img>");

		codImage.attr("src", imageUrl);
		codImage.attr("alt", "call of duty image");

		$("#images").prepend(codImage);
		});
	});

	$("#worldofwarcraft-button").on("click", function() {
		console.log("button clicked");

		var queryURL = "http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=worldofwarcraft"

		$.ajax({
			url: queryURL,
			method: "GET"
		})

		.done(function(response) {

		var imageUrl = response.data.image_original_url;

		var wowImage = $("<img>");

		wowImage.attr("src", imageUrl);
		wowImage.attr("alt", "World of Warcraft image");

		$("#images").prepend(wowImage);
		});
	});

	$("#league-button").on("click", function() {
		console.log("button clicked");

		var queryURL = "http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=leagueoflegends"

		$.ajax({
			url: queryURL,
			method: "GET"
		})

		.done(function(response) {

		var imageUrl = response.data.image_original_url;

		var leagueImage = $("<img>");

		leagueImage.attr("src", imageUrl);
		leagueImage.attr("alt", "League of Legends Image");

		$("#images").prepend(leagueImage);
		});
	});

	$("#battlefield1-button").on("click", function() {
		console.log("button clicked");

		var queryURL = "http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=battlefield1"

		$.ajax({
			url: queryURL,
			method: "GET"
		})

		.done(function(response) {

		var imageUrl = response.data.image_original_url;

		var battlefieldImage = $("<img>");

		battlefieldImage.attr("src", imageUrl);
		battlefieldImage.attr("alt", "Battlefield image");

		$("#images").prepend(battlefieldImage);
		});
	});
});
