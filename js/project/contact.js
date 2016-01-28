$("form#contact-us-form").submit(function (event) {
    event.preventDefault();
    
    var form = "contact-us-form";
    var form_element = $("#contact-us-form");
    var field_list = ["FirstName","Email"];
    var error_msg = "";
    var error_message_list = { required: "This field is required!", email: "Please enter a valid email!", systemError: "You've encountered a system error!" };

    if (validForm(form, field_list)) {
        //Ajax call
        var action = "/umbraco/Surface/Contact/SendMail/";
        ajaxCallMail(action, form_element);
    }

    function ajaxCallMail(action, form_obj) {
        $("#contact_us_form_result").html("Please wait ...");
        $("#contact_us_form_result").removeClass("hidden");

        $.ajax({
            type: "GET",
            url: action,
            data: form_obj.serialize(),
            cache: false,
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            error: function (error) {
                // According to jquery docs, this is never called for cross-domain JSONP requests
                $("#contact_us_form_result").html(error_message_list.systemError);
                console.log(error);
                $("#contact_us_form_result").removeClass("hidden");

            },
            success: function (data) {
                var message = "";
                if (data.success != "" && data.success != undefined) {
                    message = data.success;
                    $("#contact_us_form_result").addClass("green");
                } else {
                    message = data.error;
                }
                $("#contact_us_form_result").html(message);
                $("#contact_us_form_result").removeClass("hidden");
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
                if (field_list[field] == "Email") {
                    if (!isValidEmail(field_value)) {
                        error_msg = error_message_list.email;
                        validForm = false;
                    }
                }
            }

            if (!validForm) {
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

$("#contact-us-form").click(function () {
    if (!$("#contact_us_form_result").hasClass("hidden")) {
        $("#contact_us_form_result").addClass("hidden");
    }

    $(".error-msg").each(function () {
        if (!$(this).hasClass("hidden")) {
            $(this).addClass("hidden");
        }
    })
});