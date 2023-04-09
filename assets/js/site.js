/* js code */


$(document).ready(function(){  
	$('.bxslider').bxSlider({
		pagerCustom: '#bx-pager',
		mode: 'horizontal',
		auto: true,
		infiniteLoop: true,			
		controls: false, 
		speed: 1000,			
		adaptiveHeight: true,
		easing:'ease-in-out'
	});
	
			
	 $('.slider-nav').slick({
		slidesToShow: 3,
		centerMode: true,
		slidesToScroll:1,
		dots: false,
		focusOnSelect: true,
		
		responsive: [
			{
			  breakpoint: 940,
			  settings: {
			  slidesToShow: 1,
			  slidesToScroll: 1
			  }
			}
	   ]
	});

	$('.slider-nav').on('afterChange', function(e, s, currentSlideIndex) {
	  var previousSlideIndex = currentSlideIndex - 1;  
	  var nextSlideIndex = currentSlideIndex + 1;  
	  var currentValue1 = $('.slick-active').data('slick-index');
	  
	  var t1 = "div[data-slick-index="+previousSlideIndex+"]";
		//$("div[data-slick-index="+currentValue1+"]").css({"transform":"none"});
		//$("div[data-slick-index="+previousSlideIndex+"]").css({"transform":"rotate(350deg)"});
		//$("div[data-slick-index="+nextSlideIndex+"]").css({"transform":"rotate(10deg)"});
	  
	});
});
