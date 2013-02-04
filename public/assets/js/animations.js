
$(document).ready(function() {

    /* **** some super fancy animations? **** */
    $('header #navigation').delay(400).animate({
         'opacity' : '1',
         'margin-top' : '+=30px'
    }, { duration: 700, easing: 'swing' });

    $('#headline').delay(1100).animate({
         'opacity' : '1'
    }, { duration: 600, easing: 'swing' });

    $('#browser').delay(1100).animate({
         'opacity' : '1'
    }, { duration: 600, easing: 'swing' });

});