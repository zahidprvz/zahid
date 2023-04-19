$(document).ready(function() {

    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');
    });

    $(window).on('scroll load', function(){

        $('#menu').removeClass('fa-times');
        $('header').removeClass('toggle');

        if($(window).scrollTop() > 0) {
            $('.top').show();
        }
        else {
            $('.top').hide();
        } 

    });


    $('a[href*="#"]').on('click', function(event) {
        event.preventDefault();
        var target = $(this.hash);
        $('html, body').stop().animate({
            'scrollTop': target.offset().top
        }, 800, 'swing', function() {
            window.location.hash = target;
        });
    });
    

});