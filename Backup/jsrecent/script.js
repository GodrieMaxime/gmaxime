$(function() {
	initAnimation();
	homeChange();
	dribbbleShots()
	headerMap();
	formValidation();
	konamiCode();
});

$(window).scroll(function() {	      
	scrollBanner();	 
});


function homeChange(){
	$('.insta-wrapper').hover(function(){
		
		$(this).find('h2').addClass('blue');
        $(this).find('h1 > a').addClass('blue');
		$(this).find('.bike').addClass('green-bike');
	}, function(){
		$(this).find('h1 > a').text('maxime godrie').removeClass('blue');
		$(this).find('h2').removeClass('blue');
	
	});
}

function initialize( lt, lg ) {
  var mapOptions = {
    zoom: 7,
    center: new google.maps.LatLng(lt,lg),
	disableDefaultUI: true,
	scrollwheel: false,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  var map = new google.maps.Map(document.getElementById('map_canvas'),
      mapOptions);

  var marker = new google.maps.Marker({
   
    map: map,
    title: ''
  });
  google.maps.event.addListener(map, 'center_changed', function() {
    window.setTimeout(function() {
      map.panTo(marker.getPosition());
    }, 3000);
  });
  google.maps.event.addListener(marker, 'click', function() {
    map.setZoom(8);
    map.setCenter(marker.getPosition());
  });
}



function headerMap(){    
    var lat = 51.054483;
    var lng = -1.343028;   

		initialize( lat, lng );		
	    $(".insta-mosaic").fadeIn(1500);
}

function dribbbleShots(){
	$.jribbble.getShotsByPlayerId('carlosjgsousa', function (playerShots) {
	    var html = [];	
	    $.each(playerShots.shots, function (i, shot) {
	        html.push('<a href="' + shot.url + '" target="_blank">');
	        html.push('<span>' + shot.title + '</span>');	
	        html.push('<img src="' + shot.image_url + '" ');
	        html.push('alt="' + shot.title + '"></a>');
	    });
	    $('#shotsByPlayerId').html(html.join(''));
	}, {page: 1, per_page: 15});
}

function formValidation() {
	$('#contact-form').validate({
		errorLabelContainer: "div.error",
		wrapper: "",			
		rules:{
		    nome:{
		        required: true,
		        minlength: 3
		    },
		    email: {
		        required: true,
		        email: true
		    },
			mensagem: {
		        required: true,
		        minlength: 10
		    }
		},
		messages:{
		    nome:{
		        required: "Name field is required",
		        minlength: "Name field must have at least 3 chars"
		    },
		    email: {
		        required: "Email field is required",
		        email: "Email field is not valid"
		    },
			mensagem:{
		        required: "Message field is required",
		        minlength: "Message field must have at least 10 chars"
		    }
		},        
		submitHandler: function() {
			var datastr = $("#contact-form").serialize(); 
			$.ajax({
				type: "POST",
				url: "email.php",
				data: datastr,
				cache: false,
				success: function(data){
					$(':input').each(function() {
					    var type = this.type;
					    var tag = this.tagName.toLowerCase();
					    if (type == 'text' || type == 'password' || type=='email' || tag == 'textarea')
					      this.value = "";
					});
					$('.form-group').fadeOut(100, function(){
						$(".success").fadeIn(200);
						$(".success").delay(4000).fadeOut(500, function() {
							$('.form-group').fadeIn(200);
						});
					});
				}
			});
		}       		 
	});
}

/* 200 DELAY BEFORE */
function checkViewport(){
			    $(".animate:in-viewport(-80)").each(function() {
			        $(this).delay(100).addClass('do-anim');
			    });
			}
			    
function initAnimation() {
		checkViewport();
		$(window).bind("scroll", function(event) {checkViewport();}); //end scroll
		$(window).resize(function(){checkViewport();});
			  
			}
			
function scrollBanner() {
	scrollPos = $(this).scrollTop();
	$('.insta-mosaic > span').css({
	  'top' : (-scrollPos/3)+"px"
	});    
}

