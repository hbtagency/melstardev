$("form#group-enquiry").submit(function(e){function r(e,r){$("#enquiry_form_result").html("Please wait ..."),$("#enquiry_form_result").removeClass("hidden"),ajax_data=r.serialize().replace("g-recaptcha-response","Response"),$.ajax({type:"GET",url:e,data:ajax_data,cache:!1,dataType:"json",contentType:"application/json; charset=utf-8",error:function(e){$("#enquiry_form_result").html(m.systemError),$("#enquiry_form_result").removeClass("hidden")},success:function(e){var r="";""!=e.success&&void 0!=e.success?(r=e.success,$("#enquiry_form_result").addClass("green")):r=e.error,$("#enquiry_form_result").html(r),$("#enquiry_form_result").removeClass("hidden")}}),grecaptcha.reset()}function s(e,r){var s=!0;for(var t in r){var o=document.forms[e][r[t]].value;document.forms[e][r[t]];i(o)?"Email"==r[t]&&(a(o)||(u=m.email,n(r[t],u,l),s=!1)):(u=m.required,n(r[t],u,l),s=!1)}if(!s)for(f in l)$("input[name='"+f+"']").siblings(".error-msg").html(l[f]),$("input[name='"+f+"']").siblings(".error-msg").removeClass("hidden"),$("#"+f).parent().siblings(".error-msg").html(l[f]),$("#"+f).parent().siblings(".error-msg").removeClass("hidden");return s}function n(e,r,s){s[e]=r}function i(e){return void 0!=e&&null!=e&&""!=e?!0:!1}function a(e){var r=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return r.test(e)}e.preventDefault(),$("#enquiry_form_result").hasClass("green")&&$("#enquiry_form_result").removeClass("green");var t="group-enquiry",o=$("#group-enquiry"),d=["FirstName","LastName","Phone","Email","GroupName","ProposedEventDate"],u="",m={required:"This field is required!",email:"Please enter a valid email!",systemError:"You've encountered a system error!"},l={};if(s(t,d)){var c="/umbraco/Surface/GroupEnquiry/submitForm/";$(this).hasClass("submited")?$(this).removeClass("submited"):($(this).addClass("submited"),r(c,o))}}),$("#group-enquiry").click(function(){$("#enquiry_form_result").hasClass("hidden")||$("#enquiry_form_result").addClass("hidden"),$(".error-msg").each(function(){$(this).hasClass("hidden")||$(this).addClass("hidden")})}),$(".show_terms_conditions").click(function(){$("#terms_and_conditions").hasClass("hidden")?$("#terms_and_conditions").removeClass("hidden"):$("#terms_and_conditions").addClass("hidden")}),$("#accept_terms").click(function(){$("#terms_and_conditions").hasClass("hidden")?$("#terms_and_conditions").removeClass("hidden"):$("#terms_and_conditions").addClass("hidden"),$("#AcceptTerms").prop("checked",!0)});