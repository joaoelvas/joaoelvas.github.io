var slide = function(){
	$(".slide-nav i:first").click(function(){
		$(".slide2, .slide3").removeClass("activeslide");
		$(".slide1").addClass("activeslide");
		$(".slide-nav i").removeClass("fa-circle");
		$(".slide-nav i:first").addClass("fa-circle");
	});

	$(".slide-nav i:eq(1)").click(function(){
		$(".slide1, .slide3").removeClass("activeslide");
		$(".slide2").addClass("activeslide");
		$(".slide-nav i").removeClass("fa-circle");
		$(".slide-nav i:eq(1)").addClass("fa-circle");
	});

	$(".slide-nav i:last").click(function(){
		$(".slide1, .slide2").removeClass("activeslide");
		$(".slide3").addClass("activeslide");
		$(".slide-nav i").removeClass("fa-circle");
		$(".slide-nav i:last").addClass("fa-circle");
	});
};

function autoslide (){
	var currentSlide = $(".activeslide");
	if (currentSlide.hasClass('slide1')) {
		$('.slide1').removeClass('activeslide');
		$('.slide2').addClass('activeslide');
		$(".slide-nav i:first").removeClass("fa-circle");
		$(".slide-nav i:eq(1)").addClass("fa-circle");
	} else if (currentSlide.hasClass('slide2')) {
		$('.slide2').removeClass('activeslide');
		$('.slide3').addClass('activeslide');
		$(".slide-nav i:eq(1)").removeClass("fa-circle");
		$(".slide-nav i:last").addClass("fa-circle");
	} else if (currentSlide.hasClass('slide3')) {
		$('.slide3').removeClass('activeslide');
		$('.slide1').addClass('activeslide');
		$(".slide-nav i:last").removeClass("fa-circle");
		$(".slide-nav i:first").addClass("fa-circle");
	};

	setTimeout("autoslide()",4000);
};

$(document).ready(slide);
$(document).ready(setTimeout("autoslide()",4000));