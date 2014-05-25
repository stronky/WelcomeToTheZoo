$(document).ready(function(){
	$("img").click(function() {
		$(this).next("audio").get(0).play();
	});
});