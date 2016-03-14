$(function() {


    // Add smooth scrolling to all links inside a navbar
    $("#scrollspy a").on('click', function(event) {

        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash (#)
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area (the speed of the animation)
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800, function() {

            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
        });
    });

    //dialog
    $('.popup').on('click', function() {
        event.preventDefault();
        $('#dialog').show();
        $('#dialog').animate({
            scrollTop:0
        });
        var project = $(this).attr("href");
        $(project).fadeIn(500); 
        $(".popup-block:visible").not(project).hide();
    });
    $('.btn-close, .btn-back').on('click', function() {
        $('#dialog, .popup-block').hide();
        //ga('send', 'pageview', { 'page': location.href });
    });


});


