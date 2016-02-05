var Parallax = function () {
    var defaults = {
        className: "parallax-banner"
    }

    if (arguments[0] && typeof arguments[0] === "object") {
        this.defaults = arguments[0];
    }
};

Parallax.prototype.horizontalParallax = function () {
    var defaults = this.defaults;
    $(window).scroll(function () {
        var x = $(this).scrollTop();
        if ($(window).width() > 1200) {
            $("." + defaults.className).css('background-position', parseInt(-x / 10) + 'px 20%, ' + parseInt(-x / 20) + 'px 0% ');
        }
    });
}

