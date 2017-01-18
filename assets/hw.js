/* Javascript code for homework. */

// List of original topics.
var topics = ["Halo", "Call of Duty", "World of Warcraft", "League of Legends", "Battlefield 1"];
	
	// Function to call AJAX on button a click.

	$("#halo").on("click", function() {

		// QueryURL
	   var queryURL = "http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=halo";

	   $.ajax({
        url: queryURL,
        method: "GET"
      	})

		 .done(function(response) {

        		//  Saving the original image URL.
          var imageUrl = response.data.image_original_url;

        		// Creates a new img tag and element.
          var haloImage = $("<img>");

        		// This writes the link for the image, and if the image is not ava. it pulls the alt text of cat image.
          haloImage.attr("src", imageUrl);
          haloImage.attr("alt", "halo image");

        		// Prepending the image to the div.
          $("#images").prepend(haloImage);
      });
	});