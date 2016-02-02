//Wechat
$("#wechat").click(function () {
    if ($('#qrcode_popup').hasClass("open")) {
        $('#qrcode_popup').html("");
        $('#qrcode_popup').removeClass("open");
        $('#qrcode_popup').fadeOut();
    } else {
        $('#qrcode_popup').qrcode("@umbraco.library.NiceUrl(CurrentPage.Id)");
        $('#qrcode_popup').fadeIn();
        $('#qrcode_popup').addClass("open");
    }
});

$("#qrcode_popup").click(function () {
    $('#qrcode_popup').fadeOut(); 
    $('#qrcode_popup').html("");
});

//Facebook
function fbShare(url, title, descr, image, winWidth, winHeight) {
    var winTop = (screen.height / 2) - (winHeight / 2);
    var winLeft = (screen.width / 2) - (winWidth / 2);
    window.open('http://www.facebook.com/sharer.php?s=100&p[title]=' + title + '&p[summary]=' + descr + '&p[url]=' + url + '&p[images][0]=' + image, 'sharer', 'top=' + winTop + ',left=' + winLeft + ',toolbar=0,status=0,width=' + winWidth + ',height=' + winHeight);
}