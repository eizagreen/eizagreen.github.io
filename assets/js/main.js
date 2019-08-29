
$(function() {


    // Add smooth scrolling to all links inside a navbar
    $('#scrollspy a').on('click', function(event) {

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

    //偵測移動位置增加class
   // $('#scrollspy').on('activate.bs.scrollspy', function () {
   //      var currentItem = $(".nav li.active > a").text();
   //      $("#activeitem").html("目前您正在查看 - " + currentItem);
   //      if (currentItem == "skills") {
   //          $('.nav').addClass('white');
   //      }else {
   //          $('.nav').removeClass('white');
   //      }
   //  })


    // $("a[href^=#]").on("click", function(e) {
    //     e.preventDefault();
    //     history.pushState({}, "", this.href);
    // });

    //dialog
    $('.popup').on('click', function() {
        event.preventDefault();
        $('#dialog').show();
        $('#dialog').animate({
            scrollTop: 0
        });
        var project = $(this).attr("href");
        $(project).fadeIn(500);
        $(".popup-block:visible").not(project).hide();
        // window.location = "?project=" + project;
        
    });
    $('.btn-close, .btn-back').on('click', function() {
        $('#dialog, .popup-block').hide();
    });
    $( document ).on( 'keydown', function ( e ) {
        if ( e.keyCode === 27 ) { // ESC
            $('#dialog, .popup-block').hide();
        }
    });




});


