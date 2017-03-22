var wfslider = function () {
    var bxsliderConfig = {
        mode: 'vertical',
        auto: true,
        pause: 2000,
        controls: false,
        // pagerSelector: '#slider1Pager',
        onSliderLoad: function(){
            console.log('slider loaded fully', sliderSelector)

            //debugger;
            $('.sc').animate({
                opacity: 1
            }, 2000);
        }
    };

    var sliderSelector;

    this.init = function (selector, sliderConfig) {
        if(!$ || !jQuery || jQuery !== $){
            console.log('load jquery first');
            return;
        }
        sliderSelector = selector;
        console.log('inside init fxn of wfslider');
        sliderConfig = sliderConfig? sliderConfig: bxsliderConfig;
        var slider = $(selector).bxSlider(sliderConfig);
        return slider;
    }

    return {
        slider: this.init
    };
}
