$(document).ready(function() {

    $(".links a, .inner-links a").click(function() {
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top + "px"
        }, {
            duration: 1500,
            easing: "swing"
        });
        return false;
    });

    //WAYPOINTS - INTERACTION

    //Making the button sticky on bottom and when user intiates scrolling the sticky nature is removed.
	$('#intro').waypoint(function(event, direction) {
	   if (direction === 'down') {
	      $('#intro-intersection').removeClass('sticked');
	   }
	   else {
	      $('#intro-intersection').addClass('sticked');
	   }
	});

	//Making the header to be smaller when user scrolled down from intro ( from first page)

	$('#intro-intersection').waypoint(function(event, direction) {
		   		if (direction === 'down') {
					$('#logo img').stop().animate({height:'93px'},1000);
	      			$('.masthead').stop().animate({height:'100px'},1000);
	      			$('#show-btn').fadeOut('slow');
	   				$('#portfolio').removeClass('pad-top-page');
				 }
				 else {
	      			$('#show-btn').fadeIn('slow');
					$('.masthead').stop().animate({height:'200px'},1000);
	   				$('#logo img').stop().animate({height:'186px'},1000);
				 }
		}, {
   offset: '10%', scrollThrottle: 2000, resizeThrottle: 500 
	});

	//add some spacing when first page (not hoome) is on viewport
	$('.to-first-page').click(function(){
		$('#portfolio').addClass('pad-top-page');
	})


});