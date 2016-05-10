$("#ontime").hide();
$("#late").hide();
$("#4a").hide();
$("#4b").hide();
$("#6a").hide();
$("#6b").hide();
$("#9a").hide();
$("#9b").hide();

$("#up").click(function() {
	$("#start").slideUp();
	$("h1").delay("slow").text("8:00 am");
	$("#ontime").delay("slow").slideDown(20000);
});

$("#snooze").click(function() {
	$("#start").slideUp();
	$("h1").delay("slow").text("8:45 am");
	$("#late").delay("slow").slideDown(20000);
});

$("#diffuse").click(function() {
	$("#3").slideUp();
	$("h1").delay("slow").text("12:08 pm");
	$("#4a").delay("slow").slideDown(20000);
});

$("#silent").click(function() {
	$("#3").slideUp();
	$("h1").delay("slow").text("12:08 pm");
	$("#4b").delay("slow").slideDown(20000);
});

$("#fight").click(function() {
	$("#fight").slideUp();
	$("#quiet").slideUp();
	$("h1").delay("slow").text("12:10 pm");
	$("#6a").delay("slow").slideDown(20000);
});

$("#quiet").click(function() {
	$("#fight").slideUp();
	$("#quiet").slideUp();
	$("h1").delay("slow").text("12:10 pm");
	$("#6b").delay("slow").slideDown(20000);
});

$("#share").click(function() {
	$("#share").slideUp();
	$("#hide").slideUp();
	$("#9a").delay("slow").slideDown(20000);
});

$("#hide").click(function() {
	$("#share").slideUp();
	$("#hide").slideUp();
	$("#9b").delay("slow").slideDown(20000);
});
// $("#9a").fadeIn(7000,function() {
// 	});