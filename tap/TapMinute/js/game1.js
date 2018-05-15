
var randomItem,    
    theItem,
    theIcon,
    theItemText,
    minutes,
    seconds,
    actualScore = 0,
    bestScore = 0;

$(document).ready(function() {   
    $("#countdown").countdown360({ }).stop();
    $('.jq-play-button').show();
    $('.jq-actual-score').html('0');
    $('.jq-best-score').html('0');
});

function initiateGame() {
     $('#countdown').removeClass('pulse');
    $('.jq-play-button-text').hide();
    $('.jq-retry').show();
    actualScore = 0;
    $('.jq-actual-score').html("");
    $('.jq-best-score').html(bestScore);
    $('#countdown').addClass('pulse');
    startCountdown();
    randomActionToExecute(); 
    saveScore();
}

function randomActionToExecute() {

	items = Array(  ["right1","1",' <i class="fa fa-hand-o-right"></i><i class="fa fa-arrow-right"></i>'],
				["left1","1",'<i class="fa fa-hand-o-left"><i class="fa fa-arrow-left"></i>'],
				["up1","1",'<i class="fa fa-hand-o-up"><i class="fa fa-arrow-up"></i>'],
				["down1","1",'<i class="fa fa-hand-o-down"><i class="fa fa-arrow-down"></i>'],
				["right2","2",'<i class="fa fa-hand-o-right"><i class="fa fa-hand-o-right"><i class="fa fa-arrow-right"></i>'],
				["left2","2",'<i class="fa fa-hand-o-left"><i class="fa fa-hand-o-left"><i class="fa fa-arrow-left"></i>'],
				["up2","2",'<i class="fa fa-hand-o-up"><i class="fa fa-hand-o-up"><i class="fa fa-arrow-up"></i>'],
				["down2","2",'<i class="fa fa-hand-o-down"><i class="fa fa-hand-o-down"><i class="fa fa-arrow-down"></i>'],
				["right3","3",'<i class="fa fa-hand-o-right"><i class="fa fa-hand-o-right"><i class="fa fa-hand-o-right"><i class="fa fa-arrow-right"></i>'],
				["left3","3",'<i class="fa fa-hand-o-left"><i class="fa fa-hand-o-left"><i class="fa fa-hand-o-left"><i class="fa fa-arrow-left"></i>'],
				["up3","3",'<i class="fa fa-hand-o-up"><i class="fa fa-hand-o-up"><i class="fa fa-hand-o-up"><i class="fa fa-arrow-up"></i>'],
				["down3","3",'<i class="fa fa-hand-o-down"><i class="fa fa-hand-o-down"><i class="fa fa-hand-o-down"><i class="fa fa-arrow-down"></i>']
			);
    randomItem = items[Math.floor(Math.random()*items.length)];
    
    var index = items.indexOf(randomItem);
    theItem = items[index][0];
    theItemText = items[index][1];
    theIcon = items[index][2];

    $('.jq-action-todo').html(theIcon);
}

function startCountdown() {
 clock =  $("#countdown").countdown360({
       	 radius      : 60,
         seconds     : 10,
         fontColor   : '#FFFFFF',
         autostart   : false,
         onComplete  : function (
          
        ) { console.log('done') }
	}).start()
}

 $(function() {	
    countdown =  $("#countdown").countdown360({});
    
	$(".main-wrapper").swipe( {
		//Generic swipe handler for all directions	
		swipe:function(event, direction, distance, duration, fingerCount, fingerData) {

            if (theItem == direction + fingerCount) {
                countdown.extendTimer(1);
                actualScore++;
                randomActionToExecute(); 
            }
            else {
                /* TODO */
                countdown.extendTimer(-1);
            }
            saveScore();
           
		},
	   threshold:0,
	   fingers: 'all'
	});
	
    $( ".jq-play-button" ).click(function() {
      initiateGame();
      $('.instructions-wrapper').hide();
    });
    
    $( ".jq-instructions-button, .jq-close-button" ).click(function() {
       $('.instructions-wrapper').toggle();
    });
});


function saveScore() {
 
     $('.jq-actual-score').html(actualScore);
    if(bestScore == 0) {
        // If the bestScore is 0 , first time game played
        
        $('.jq-best-score').html(actualScore);
        bestScore = actualScore;
    }
    else if ( actualScore >= bestScore) {
        
       
        $('.jq-best-score').html(actualScore);
        bestScore = actualScore;
    }
    else if (actualScore <= bestScore) {
          $('.jq-actual-score').html(actualScore);
    }
}

