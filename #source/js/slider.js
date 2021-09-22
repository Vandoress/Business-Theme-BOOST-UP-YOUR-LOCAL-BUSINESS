$(document).ready(function(){
	$('.slider-main-screen').slick({
		arrows:false,
		dots: true,
		speed: 1000,
		autoplay: true,
		pauseOnDotsHover: true,
		waitForAnimate:false,
		fade:true,
		appendDots:$('.slider__circles')
	});
});
