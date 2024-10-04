$(document).ready(function() {
	var pagetop = $('.pagetop');
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			pagetop.fadeIn();
		} else {
			pagetop.fadeOut();
		}
	});
	
	$(function() {
	    $("img").on('contextmenu', function(e) {
	        return false;
	    });
	});    

	$(function() {
		$('a[href^=#]').click(function() {
			var velocidad = 400;
			var href = $(this).attr("href");
			var target = $(href == "#" || href == "" ? 'html' : href);
			var position = target.offset().top;
			$('body,html').animate({scrollTop:position}, velocidad, 'swing');
			return false;
		});
	});

});

/************* top navigation menu  ***************/
$(function(){
	$(".nav_list").on( "click", function() {
		if(!$(".nav_list").hasClass('active')){
		  $(".nav_list ul").slideToggle(200);
		  $(".nav_list").css("background-image","url('img/close.png')");
		  $(".nav_list").addClass('active')
	  	}else {
		  $(".nav_list ul").slideUp(200);
		  $(".nav_list").css("background-image","url('img/menuhamburger.png')");
		  $(".nav_list").removeClass('active')
		}
	});
});
