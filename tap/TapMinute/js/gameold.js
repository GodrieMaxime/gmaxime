
var randomItem,    
    theItem,
    theIcon,
    theItemText,
    minutes,
    seconds,
    actualScore = 0,
    bestScore = 0;

$(document).ready(function() {   
    /*$("#countdown").countdown360({ }).stop();*/
    $('.jq-play-button').show();
    $('.jq-actual-score').html('0');
    $('.jq-best-score').html('0');
});

function initiateGame() {
    $('.jq-play-button-text').hide();
    $('.jq-retry').show();
    actualScore = 0;
    $('.jq-actual-score').html("");
    $('.jq-best-score').html(bestScore);
    $('#countdown').addClass('tossing');
    $('.action-todo').show();
    startCountdown();
    randomActionToExecute(); 
    saveScore();
}

function randomActionToExecute() {
	items = Array( /* ["singletap","1",' <img src="img/img_tap.png" class="expandOpen">'],
                	["singletap2","1",' x2<i class="fa fa-hand-o-up expandOpen"></i>'], */
	                ["pinchin","1",'<img src="img/img_pinchin.png" class="expandOpen">'],
	                ["pinchout","1",'<img src="img/img_pinchout.png" class="expandOpen">'],
				    ["panright","1",'<img src="img/img_swiperight.png" class="expandOpen">'],
				    ["panleft","1",'<img src="img/img_swipeleft.png" class="expandOpen">'],
				    ["panup","1",'<img src="img/img_swipeup.png" class="expandOpen">'],
				    ["pandown","1",'<img src="img/img_swipedown.png" class="expandOpen">']
	);
	
    randomItem = items[Math.floor(Math.random()*items.length)];
    
    var index = items.indexOf(randomItem);
    theItem = items[index][0];
    theItemText = items[index][1];
    theIcon = items[index][2];

    $('.jq-action-todo').html(theIcon);
}

function startCountdown() {
 clock =  $("#countdown").countdown360({}).start()
}

$(function() {   
    countdown =  $("#countdown").countdown360({});
    $( ".jq-play-button" ).click(function() {
      initiateGame();
      $('.instructions-wrapper').hide();
      $('.jq-game-over').hide();
      
    });
    
    $( ".jq-instructions-button, .jq-close-button" ).click(function() {
       $('.instructions-wrapper').toggle();
    });

    var myElement = document.getElementById('main-wrapper-inner');
    var mc = new Hammer.Manager(myElement);
    var pinch = new Hammer.Pinch();
    var rotate = new Hammer.Rotate();
    
    mc.add( new Hammer.Pan({ direction: Hammer.DIRECTION_ALL, threshold: 0 }) );
    mc.add( new Hammer.Tap({ event: 'singletap2', pointers: 2}) );
    /* mc.add( new Hammer.Tap({ event: 'doubletap', taps: 2}) );*/
    mc.add( new Hammer.Tap({ event: 'singletap'}) );
    mc.add([pinch, rotate]);
   
    mc.get('pinch').recognizeWith(rotate);
    /*mc.get('doubletap').recognizeWith('singletap');
    mc.get('singletap').requireFailure('doubletap');*/

    mc.on("panleft panright singletap singletap2 panup pandown pinchin pinchout", function(ev) {
        console.log(ev.type)
        gameLogic(ev.type);
    });
});

function gameLogic(p_tapEvent) {
    if (theItem == p_tapEvent) {
        randomActionToExecute(); 
        countdown.extendTimer(2);
        gameScoring(gameSeconds);
    }
    saveScore();
}

function gameScoring (p_gameSeconds) {
    $('.jq-actual-score').removeClass('expandOpen');
    if(p_gameSeconds == 1) {
        actualScore = actualScore + 10;
        $('.jq-actual-score').addClass('expandOpen');
    }
    else if(p_gameSeconds <= 5 && p_gameSeconds > 1){
        actualScore = actualScore + 5;
        $('.jq-actual-score').addClass('expandOpen');
    }
    else {
        actualScore ++;
       $('.jq-actual-score').addClass('expandOpen');
    }
}

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

