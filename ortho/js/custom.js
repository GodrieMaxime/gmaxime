(function ($) {
 "use strict";
$(document).ready(function(){
	  
		/*
		Jquery Mobile Menu
		============================*/
		$('#main-menu').meanmenu({
			meanScreenWidth: "767",
			meanMenuContainer: '.mobile-nav-menu'
		});		
		/*
		Accordion Active JS
		============================*/
		$('.panel-heading a').on("click", function() {
			$('.panel-heading').removeClass('active');
			if(!$(this).closest('.panel').find('.panel-collapse').hasClass('in'))
				$(this).parents('.panel-heading').addClass('active');
		});			
		/*
		Project Crousel
		============================*/ 	
		  $(".medical-project").owlCarousel({
			autoplay: true, 
			pagination:false,
			nav:false, 
			dots:true, 
			items :4,
			responsive:{
				0:{
					items:1
				},
				600:{
					items:2
				},
				768:{
					items:3
				},				
				1000:{
					items:4
				}
			}			
		  }); 		
		/*
		Testimonial Crousel
		============================*/ 	
		  $(".all-testimonial").owlCarousel({
			autoplay: true, 
			pagination:false,
			nav:true, 
			navText:["<i class='icofont-thin-left'></i>","<i class='icofont-thin-right'></i>"],
			dots:false, 
			items :1,
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				768:{
					items:1
				},				
				1000:{
					items:1
				}
			}			
		  }); 		
		/*
		Project Details Crousel
		============================*/ 	
		  $(".project-details-img").owlCarousel({
            items: 1,
            nav: true,
            dots: true,
            autoplay: true,			
            loop: true,
            navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				768:{
					items:1
				},				
				1000:{
					items:1
				}
			}			
		  }); 				
		
		/*
		Slider Crousel
		============================*/ 
		$(".all-slide").owlCarousel({
            items: 1,
            nav: false,
			navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            dots: true,
            autoplay: true,
            loop: true,
			animateOut: 'slideOutDown',
			animateIn: 'flipInX',
            mouseDrag: true,
            touchDrag: true
        });
        
        $(".all-slide").on("translate.owl.carousel", function(){
            $(".slider-wraper").removeClass("animated fadeInLeft").css("opacity", "0");
            $(".slider-text h1").removeClass("animated fadeInLeft").css("opacity", "0");
            $(".slider-text span").removeClass("animated fadeInDown").css("opacity", "0");
            $(".slider-text h4").removeClass("animated fadeInUp").css("opacity", "0");
        });
        
        $(".all-slide").on("translated.owl.carousel", function(){
            $(".slider-wraper").addClass("animated fadeInLeft").css("opacity", "1");
            $(".slider-text h1").addClass("animated fadeInLeft").css("opacity", "1");
            $(".slider-text span").addClass("animated fadeInDown").css("opacity", "1");
            $(".slider-text h4").addClass("animated fadeInUp").css("opacity", "1");
        });
		
		/*
		Patner Crousel
		============================*/ 	
		  $(".all-patner").owlCarousel({
			autoplay: true, 
			pagination:false,
			nav:false, 
			dots:true, 
			items :6,
			navText: ['<i class="icofont-long-arrow-left"></i>', '<i class="icofont-long-arrow-right"></i>'],
			responsive:{
				0:{
					items:2
				},
				600:{
					items:3
				},
				768:{
					items:4
				},				
				992:{
					items:4
				},				
				1000:{
					items:6
				}
			}
		  }); 
		/*
		scrollUp
		============================*/	
		$.scrollUp({
			scrollText: '<i class="fa fa-arrow-up"></i>',
			easingType: 'linear',
			scrollSpeed: 900,
			animation: 'fade'
		});	
		/*
		Counter Js
		============================*/ 
        $('.counter').counterUp({
            delay: 10,
            time: 1000			
        });
		
		/*
		Stikey Js
		============================*/ 
 		(function () {
			var nav = $('.menu-nav-sec');
			var scrolled = false;
			$(window).scroll(function () {
				if (120 < $(window).scrollTop() && !scrolled) {
					nav.addClass('sticky_menu animated fadeInDown').animate({ 'margin-top': '0px' });
					scrolled = true;
				}
				if (90 > $(window).scrollTop() && scrolled) {
					nav.removeClass('sticky_menu animated fadeInDown').css('margin-top', '0px');
					scrolled = false
				}
			});
		}());	  
		/*
		Magnific Popup
		============================*/ 		
        $('.gallery-photo').magnificPopup({
            type: 'image',
            gallery: {
              enabled: true
            }
        });		
		/*
		Magnific Video Popup
		============================*/ 		
        $('.mfp-iframe').magnificPopup({
            type: 'iframe'
        });	 		
		/*
		Menu Sidebar Js
		============================*/ 
		    var menu = "close";            
            var $menuSidebarClass = $(".menuSidebarClass");
            var $menubarContent = $(".menubarContent");
            var $closeButton = $(".close-menubar a");
            var $document = $(document);

		    $menuSidebarClass.on("click.nav",function (e) {
                e.preventDefault();
                e.stopPropagation();
                sidebar("open");
		    });

		    $closeButton.on("click.nav",function (e) {
                e.preventDefault();
                e.stopPropagation();
		        sidebar("close");
		    });
            
            $document.on("click.nav", function(e) {
                if ( !$menubarContent.is(e.target) && $menubarContent.has(e.target).length === 0 ) {
                     sidebar("close");
                }
            });
            
            function sidebar(action) {
		        if (action == "open") {
		            $('.menubarContent').css('-webkit-transform', 'translate(0,0)');
		            menu = "open";
		        } else if (action == "close") {
                    console.log("stuff");
		            $('.menubarContent').css('-webkit-transform', 'translate(100%,0)');
		            menu = "close";
		        }
            }		
		/*
		Google Map
		============================*/
            // When the window has finished loading create our google map below
            google.maps.event.addDomListener(window, 'load', init);
        
            function init() {
                // Basic options for a simple Google Map
                // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
                var mapOptions = {
                    // How zoomed in you want the map to start at (always required)
                    zoom: 11,

                    // The latitude and longitude to center the map (always required)
                    center: new google.maps.LatLng(55.378052, -3.435973), // New York

                    // How you would like to style the map. 
                    // This is where you would paste any style found on Snazzy Maps.
                    styles: [{"featureType":"administrative.country","elementType":"geometry","stylers":[{"visibility":"simplified"},{"hue":"#ff0000"}]}]
                };

                // Get the HTML DOM element that will contain your map 
                // We are using a div with id="map" seen below in the <body>
                var mapElement = document.getElementById('gmap');

                // Create the Google Map using our element and options defined above
                var map = new google.maps.Map(mapElement, mapOptions);

                // Let's also add a marker while we're at it
                var marker = new google.maps.Marker({
                    position: new google.maps.LatLng(55.378052, -3.435973),
                    map: map,
                    title: 'UK!'
                });
            }		
		
	
		/*
		Project Gallery Js
		============================*/	
		$(".gallery-container").imagesLoaded( function() {			
			$(".gallery-container").isotope({
			itemSelector: '.filtr-item',
			layoutMode: 'fitRows',
			});
			$("ul.simplefilter li").on("click",function(){
			$("ul.simplefilter li").removeClass("active");
			$(this).addClass("active");
			 
			var selector = $(this).attr('data-filter');
			$(".gallery-container").isotope({
			filter: selector,
			animationOptions: {
			duration: 750,
			easing: 'linear',
			queue: false,
			}
			});
			return false;
			});
		});		
		/*
		Department Scrolling Js
		============================*/	
		$("#department-scrolling").mCustomScrollbar({
			theme:"dark-3",
			setHeight:400
		});
		/*
		Animated Progress Bar Js
		============================*/	

		$('.skill-progressbar').one('inview', function(event, isInView, visiblePartX, visiblePartY) {
			if (isInView) {
			  jQuery('.progress-inner').each(function() {
				jQuery(this).find('.progress-content').animate({
				  width:jQuery(this).attr('data-percentage')
				},2000);
				
				jQuery(this).find('.progress-number-count').animate(
				  {left:jQuery(this).attr('data-percentage')},
				  {
				   duration: 2000,
				   step: function(now, fx) {
					 var data = Math.round(now);
					 jQuery(this).find('.progress-percent').html(data + '%');
				   }
				});  
			  });
					
			}
        });

		/*
		Preeloader
		============================*/
		$(window).on("load", function() {
			$('#preloader').fadeOut();
			$('#preloader-status').delay(200).fadeOut('slow');
			$('body').delay(200).css({'overflow-x':'hidden'})
		}); 
	
		
	});	
})(jQuery);

