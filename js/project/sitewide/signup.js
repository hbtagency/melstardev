$(document).ready(function () {
    ajaxMailChimpForm($("#subscribe-form"), $("#subscriberesult2"), $("#emailField"));
    // Turn the given MailChimp form into an ajax version of it.
    // If resultElement is given, the subscribe result is set as html to
    // that element.
    function ajaxMailChimpForm($form, $resultElement, $emailField, $mailContainer) {
        // Hijack the submission. We'll submit the form manually.
        $form.submit(function (e) {
            e.preventDefault();
            if (!isValidEmail($form)) {
                var error = "A valid email address must be provided.";
                $resultElement.html(error);
            } else {
                $resultElement.html("Subscribing...");
                submitSubscribeForm($form, $resultElement, $emailField);
            }
        });
    }
    // Validate the email address in the form
    function isValidEmail($form) {
        return true;
    }
    // Submit the form with an ajax/jsonp request.
    // Based on http://stackoverflow.com/a/15120409/215821
    function submitSubscribeForm($form, $resultElement, $emailField) {
        $.ajax({
            type: "GET",
            url: $form.attr("action"),
            data: $form.serialize(),
            cache: false,
            dataType: "jsonp",
            jsonp: "c", // trigger MailChimp to return a JSONP response
            contentType: "application/json; charset=utf-8",
            error: function (error) {
                // According to jquery docs, this is never called for cross-domain JSONP requests
                alert("Mailchimp error");
            },
            success: function (data) {
                if (data.result != "success") {
                    var message = data.msg || "Sorry. Unable to subscribe. Please try again later.";
                    if (data.msg && data.msg.indexOf("already subscribed") >= 0) {
                        $resultElement.html(message);
                    }
                    $resultElement.html(message);
                    $resultElement.removeClass("hidden");
                    $emailField.removeClass();
                    $emailField.addClass("error");
                    $emailField.val("");
                    //$mailContainer.addClass("error");
                } else {
                    data.msg = "Success: Please check your email account to verify your email address"
                    $resultElement.html(data.msg);
                    $resultElement.addClass("success");
                    $resultElement.removeClass("hidden");
                    $emailField.removeClass();
                    $emailField.addClass("success");
                    $emailField.val("");
                    //$mailContainer.addClass("success");
                }
            }
        });
    }
});


//Expanable details
var windowWidth = window.innerWidth;


$('html').click(function (e) {
    if (e.target.id == 'emailField' || e.target.id == 'extra_form_1' || e.target.id == 'extra_form_2' || e.target.id == 'extra_form_3' || e.target.id == 'extra_form_4' || e.target.id == 'extra_form_5' || e.target.id == 'mce-MMERGE' || e.target.id == 'signup_submit' || e.target.id == 'mce-MMERGE3-month' || e.target.id == 'mce-MMERGE3-day') {
        $(this).val("");
        $(this).removeClass();

        $("#subscriberesult2").removeClass("success");
        $("#subscriberesult2").addClass("hidden");
        $("#subscriberesult2").html("");
        $("#emailField").removeClass("error");

        $("#extra_wrapper").css({
            "height": "auto"
        });

        $(".extra_Info").css({
            "max-height": "300px"
        });
        $(".sign_up").css({
            "height": "auto"
        });

    }
    else {
        $("#extra_wrapper").css({
            "height": "auto",
        });

        $(".extra_Info").css({
            "-webkit-transition": "max-height 1s",
            "-moz-transition": " max-height 1s",
            "-ms-transition": "max-height 1s",
            "-o-transition": " max-height 1s",
            "transition": "max-height 1s",
            "overflow": "hidden",
            "max-height": " 0px"
        });

        $(".sign_up").css({
            "height": "auto",
            "overflow": "auto"
        });

        $("#signup_button").css({
            "top": "0",
            "position": "relative",
            "right": "0",
        });
    }
});