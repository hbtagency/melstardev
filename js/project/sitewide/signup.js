$("form#subscribe-form").submit(function (event) {
    event.preventDefault();
    
    var form = "mc-embedded-subscribe-form";
    var form_element = $("#subscribe-form");
    var field_list = ["FNAME", "LNAME", "EMAIL"];
    var error_msg = "";
    var error_message_list = { required: "This field is required!", email: "Please enter a valid email!" };

    if (validForm(form, field_list)) {
        //Ajax call
        var action = "http://melbournestar.us11.list-manage.com/subscribe/post-json?u=780de5edae0da9609d83bdfdc&amp;id=df97abedaf";
        ajaxCallMailChimp(action, form_element);
    }

    function ajaxCallMailChimp(action, form_obj) {
        $.ajax({
            type: "GET",
            url: action,
            data: form_obj.serialize(),
            cache: false,
            dataType: "jsonp",
            jsonp: "c", // trigger MailChimp to return a JSONP response
            contentType: "application/json; charset=utf-8",
            error: function (error) {
                // According to jquery docs, this is never called for cross-domain JSONP requests
                $("#sign-up-msg").html("Mailchimp Error!");
            },
            success: function (data) {
                if (data.result == "success") {
                    $("#sign-up-msg").addClass("green");
                }
                $("#sign-up-msg").html(data.msg);
                $("#sign-up-msg").removeClass("hidden");
            }
        });
    }

    function validForm(form, field_list) {
        var validForm = true;
        for (var field in field_list) {
            var field_value = document.forms[form][field_list[field]].value;
            var current_field = document.forms[form][field_list[field]];

            //Null Validation 
            if (!isNotNull(field_value)) {
                error_msg = error_message_list.required;
                validForm = false;
            } else {
                //Email Validation
                if (field_list[field] == "EMAIL") {
                    if (!isValidEmail(field_value)) {
                        error_msg = error_message_list.email;
                        validForm = false;
                    }
                }
            }

            if (error_msg != "") {
                //Gonna show error messages per field
                $("input[name='" + current_field.name + "']").siblings(".error-msg").html(error_msg);
                $("input[name='" + current_field.name + "']").siblings(".error-msg").removeClass("hidden");
            }
        }
        return validForm;
    }

    function isNotNull(field) {
        if ((field != undefined) && (field != null) && (field != "")) {
            return true;
        } else {
            return false;
        }
    }

    function isValidEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }
});

$("#subscribe-form input[type=text]").click(function () {
    if (!$("#sign-up-msg").hasClass("hidden")) {
        $("#sign-up-msg").addClass("hidden");
    }

    $(".error-msg").each(function () {
        if (!$(this).hasClass("hidden")) {
            $(this).addClass("hidden");
        }
    })
});