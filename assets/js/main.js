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

    //works grid
    $('.grid').masonry({
        "columnWidth": ".grid-sizer",
        "itemSelector": ".item"
    });

    //dialog
    $('.popup').on('click', function() {
        // var $this = $(this);
        // var $card = $('.card');

        // var title = $this.find('.article-title').html();
        // var image = $this.find('img').attr('src');
        // var time = $this.data('time');
        // var user = $this.data('user');
        // var picture = $this.data('picture');

        // $card.find('.instagram-pic img').attr('src', image);
        // $card.find('.name').html(user);
        // $card.find('.upload-time').html(time);
        // $card.find('.msg').html(title);
        // $card.find('.author img').attr('src', picture);

        $('#dialog').show();
    });
    $('.btn-close').on('click', function() {
        $('#dialog').hide();
        //ga('send', 'pageview', { 'page': location.href });
    });

    $(window).resize(function() {
        $(".masonry").masonry("reload");
    });

});
