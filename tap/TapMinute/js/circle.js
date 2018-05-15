$(window).load(function(){
$('head style[type="text/css"]').attr('type', 'text/less');
less.refreshStyles();
var transform_styles = ['-webkit-transform', '-ms-transform', 'transform'];

function draw(rotation) {
    var fill_rotation = rotation;
    var fix_rotation = rotation * 2;
    for (i in transform_styles) {
        $('.circle .fill, .circle .mask.full').css(transform_styles[i], 'rotate(' + fill_rotation + 'deg)');
        $('.circle .fill.fix').css(transform_styles[i], 'rotate(' + fix_rotation + 'deg)');
    }
}

var drawAmount = 0;
var interval = 0;
setInterval(

function () {

    if (drawAmount == 180) {
        $('.gameover').show();
        $('.mask .fill').css('background-color', 'red');
        $('.drawamount').html(drawAmount);
    } else if (drawAmount < 180) {
        drawAmount = drawAmount + 60;

        if (drawAmount > 120) {

            $('.mask .fill').css('background-color', 'orange');
        } else if (drawAmount == 120) {

            $('.mask .fill').css('background-color', 'pink');
        } else if (drawAmount == 60) {
            $('.mask .fill').css('background-color', 'blue');
        }

        $('.drawamount').html(drawAmount);
        draw(drawAmount);

    }


},
1000 /* 10000 ms = 10 sec */ );


$(".radial-progress").click(function () {
    var toRemove = drawAmount - 60;
    drawAmount = drawAmount - 60;

    $('.drawamount').html(drawAmount);
    draw(toRemove);
});
});