
/*************  event history dropdown  ***************/
$(function(){
	$(".event_history_down").on( "click", function() {
		if(!$(".event_history_down").hasClass('active')){
		  $(".event_history ul").slideToggle(400);
		  $(".event_history_down").css("border-bottom-right-radius","0");
		  $(".event_history_down").css("border-bottom-left-radius","0");
		  $(".event_history_down").addClass('active')
	  	}else {
		  $(".event_history ul").slideUp(400);
		  $(".event_history_down").css("border-bottom-right-radius","15px");
		  $(".event_history_down").css("border-bottom-left-radius","15px");
		  $(".event_history_down").removeClass('active')
		}
	});
});
