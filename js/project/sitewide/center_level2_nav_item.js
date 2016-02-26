$(document).ready(function () {
    $(".level-2").each(function () {
        //Step 1, get parent width
        var parentWidth = $(this).parent(".dropdown").width();
        /*Step 2, introduce CenterChildNavAnimator to do the centering job.*/
        var animator = new CenterChildNavAnimator(parentWidth);
        animator.centerDiv($(this), "l");
        if ($(this).width() < parentWidth) {
            $(this).css("width", (parentWidth) + "px");
        }
    });
});

/* Resusable part */
//CenterChildNavAnimator will make second level nav centered to parent one. 
var CenterChildNavAnimator = function (width) {
    var parentWidth;
    this.parentWidth = width; 
}

CenterChildNavAnimator.prototype.centerDiv = function (obj, direction) {
    var distance = (obj.width() - this.parentWidth) / 2;
    //If submenu is right aligned already
    if (direction == "r") {
        obj.css("margin-right", "-" + distance + "px");
    } else {
        //Else if submenu is left aligned to parent one
        obj.css("margin-left", "-" + distance + "px");
    } 
}
/* End of Resusable part */