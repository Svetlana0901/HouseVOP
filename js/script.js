$(window).on("scroll", function() {
	var scrollPos = $(window).scrollTop();
	if (scrollPos <= 0) {
		$('.header').addClass('top-of-page');
	} else {
		$('.header').removeClass('top-of-page');
	}
});

$(document).ready(function(burger) {
	$('.header__burger').click(function(event){
		$('.header__burger,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});
$(document).ready(function(burger) {
	$('.header__menu').click(function(event){
		$('.header__burger,.header__menu').removeClass('active');
		$('body').removeClass('lock');
	});
});

$(document).ready(function(){
	var controls = {
		video: $(".block-video__clip"),
		playpause: $(".block-video__playpause")
	};

	var video = controls.video[0];

	controls.playpause.click(function(){
		if (video.paused) {
			video.play();
		} else {
			video.pause();
		}
	});
});
$('.block-video__clip').bind('pause ended', function () {
	$('.block-video__playpause').addClass('pauseBtn');
		console.log ("Панель управления отображением");
});
$('.block-video__clip').bind('play', function () {
	$('.block-video__playpause').removeClass('pauseBtn');
		console.log ("Скрытая панель управления");
});