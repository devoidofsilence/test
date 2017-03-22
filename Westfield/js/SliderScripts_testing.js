
$(document).ready(function () {
    window.config = {};
    window.homeSliders = {};
$('.sc').css('opacity',1);
    var nextSlideBgColor = '', lastSlideBgColor = '';
    function getConfigOptions(mode) {
        return {
            autoStart: true,
            auto: true,
            mode: mode,
            pause: 3000,
            pager: false,
            // minSlides: 1,
            // maxSlides: 1,
            //slideWidth: "200",
            //preloadImages: 'all',
            controls: false,
            autoControls: false,
            touchEnabled: false,
            easing: 'ease-out',
            speed: 1000,
            infiniteLoop: true
        };
    }

    function switchDirection(config, direction) {
        var c = $.extend({}, config);
        c.mode = direction;
        return c;
    }


    var slider8 = $('.bxslider9').bxSlider(getConfigOptions('horizontal'));
    var slider9 = $('.bxslider').bxSlider(getConfigOptions('horizontal'));

});

