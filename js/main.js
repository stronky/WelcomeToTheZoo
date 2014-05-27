$(document).ready(function(){
	$("img").click(function() {
		var sound1 = new Media("sounds/sound1.mp3");
		sound1.play();

		//$(this).next("audio").get(0).play();
	});
});

function playAudio() {
	var myMedia = new Media("sounds/sound1.mp3");
	myMedia.play();	
}

function playAudio2(url) {
    // Play the audio file at url
    var my_media = new Media(url,
        // success callback
        function() {
            console.log("playAudio():Audio Success");
            alert("playAudio():Audio Success");
        },
        // error callback
        function(err) {
            console.log("playAudio():Audio Error: "+err);
            alert("playAudio():Audio Error"+err);
    });

    // Play audio
    my_media.play();
}