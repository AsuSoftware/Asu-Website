$(document).ready(function () {
    var button = $('#but');
    $(button).on('click', function () {
        $(this).animate(500, function () {
            $('#na').css('display', 'flex');
            $(button).hide();
        })

    })

    $('#inchide').on('click', function () {
        $('#na').css('display', 'none');
        $(button).show();
    })

    /*var $window = $(window);
    var $slide = $('#slide');
    var endZone = $('#bb').offset().top - $window.height() - 500;

    $window.on('scroll', function () {
        if ((endZone) < $window.scrollTop()) {
            $slide.animate({
                'left': '20%'
            }, 250);
        } else {
            $slide.stop(true).animate({
                'left': '69%'
            }, 250);
        }
    });

*/



});