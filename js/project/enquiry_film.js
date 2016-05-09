$("form#general-enquiry-form").submit(function (event) {
    event.preventDefault();
    /* init result box */
    if ($("#enquiry_form_result").hasClass("green")) {
        $("#enquiry_form_result").removeClass("green");
    }

    var form = "general-enquiry-form";
    var form_element = $("#general-enquiry-form");
    var field_list = ["FirstName","LastName", "Phone","Email"];
    var error_msg = "";
    var error_message_list = { required: "This field is required!", email: "Please enter a valid email!", systemError: "You've encountered a system error!" };
    var errorFields = {};

    if (validForm(form, field_list)) {
        //Ajax call
        var action = "/umbraco/Surface/FilmEnquiry/submitForm/";

        /* This part of code is to avoid double submit */
        if (!$(this).hasClass("submited")) {
            $(this).addClass("submited");
            ajaxCallMail(action, form_element);
        } else {
            $(this).removeClass("submited");
        }
        /* End of doulbe submit detection */
    }

    function ajaxCallMail(action, form_obj) {
        //This is what user gonna see when wait for system response.
        $("#enquiry_form_result").html("Please wait ...");
        $("#enquiry_form_result").removeClass("hidden");
        
        //"g-recaptcha-response" matches "Response" 
        ajax_data = form_obj.serialize().replace("g-recaptcha-response", "Response");
        $.ajax({
            type: "GET",
            url: action,
            data: ajax_data,
            cache: false,
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            error: function (error) {
                // According to jquery docs, this is never called for cross-domain JSONP requests
                
                $("#enquiry_form_result").html(error_message_list.systemError);
                $("#enquiry_form_result").removeClass("hidden");
            },
            success: function (data) {
                var message = "";
                if (data.success != "" && data.success != undefined) {
                    message = data.success;
                    $("#enquiry_form_result").addClass("green");
                } else {
                    message = data.error;
                }
                $("#enquiry_form_result").html(message);
                $("#enquiry_form_result").removeClass("hidden");
            }
        });

        grecaptcha.reset()
    }

    function validForm(form, field_list) {
        var validForm = true;
        

        for (var field in field_list) {
            var field_value = document.forms[form][field_list[field]].value;
            var current_field = document.forms[form][field_list[field]];

            //Null Validation 
            if (!isNotNull(field_value)) {
                error_msg = error_message_list.required;
                errorElementList(field_list[field], error_msg, errorFields);
                validForm = false;
            } else {
                //Email Validation
                if (field_list[field] == "Email") {
                    if (!isValidEmail(field_value)) {
                        error_msg = error_message_list.email;
                        errorElementList(field_list[field], error_msg, errorFields);
                        validForm = false;
                    }
                }
            }
        }
        if (!validForm) {
            //Gonna show error messages per field
            for (f in errorFields) {
                $("input[name='" + f + "']").siblings(".error-msg").html(errorFields[f]);
                $("input[name='" + f + "']").siblings(".error-msg").removeClass("hidden");
                $("#" + f).parent().siblings(".error-msg").html(errorFields[f]);
                $("#" + f).parent().siblings(".error-msg").removeClass("hidden");
            }
        }

        return validForm;
    }

    function errorElementList(field, error_msg, errorFields) {
        errorFields[field] = error_msg;
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

$("#general-enquiry-form").click(function () {
    if (!$("#enquiry_form_result").hasClass("hidden")) {
        $("#enquiry_form_result").addClass("hidden");
    }

    $(".error-msg").each(function () {
        if (!$(this).hasClass("hidden")) {
            $(this).addClass("hidden");
        }
    })
});

$(".show_terms_conditions").click(function () {
    if ($("#terms_and_conditions").hasClass("hidden")) {
        $("#terms_and_conditions").removeClass("hidden");
    } else {
        $("#terms_and_conditions").addClass("hidden");
    }
});

$("#accept_terms").click(function () {
    if ($("#terms_and_conditions").hasClass("hidden")) {
        $("#terms_and_conditions").removeClass("hidden");
    } else {
        $("#terms_and_conditions").addClass("hidden");
    }
    
    $("#AcceptTerms").prop("checked", true);
});