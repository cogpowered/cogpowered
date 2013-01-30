
$(document).ready(function() {

    $('header #navigation #logo').delay(400).animate({
        'opacity': '1',
        'margin-top': '+=30px'
    }, { duration: 700, easing: 'swing' });

    $('header #navigation .left, header #navigation .right').delay(1100).animate({
        'opacity': '1'
    }, { duration: 700, easing: 'swing' });

    $('#headline').delay(1100).animate({
         'opacity' : '1'
    }, { duration: 700, easing: 'swing' });

    $('#browser').delay(1100).animate({
         'opacity' : '1'
    }, { duration: 700, easing: 'swing' });

});