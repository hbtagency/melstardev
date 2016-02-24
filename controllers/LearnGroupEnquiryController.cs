using melbournestardev.helpers;
using melbournestardev.models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Mail;
using System.Web;
using System.Web.Mvc;

namespace melbournestardev.controllers
{
    public class LearnGroupEnquiryController : Umbraco.Web.Mvc.SurfaceController
    {
        public String submitForm(GroupsEnquiryModel model)
        {
            string response = model.Response;
            List<string> resultList = new List<string>();

            //If required, could remove error message to config or umbraco.
            Dictionary<string, string> errorMessages = new Dictionary<string, string>()
            {
                {"general","Form validation error!"},
                {"success","Your Request was submitted successfully. We will contact you shortly."},
                {"recaptcha","Please complete recaptcha field!"},
                {"accept_term","Please accept term before we submit your enquiries!"},
                {"system","There was an error submitting the form, could possibly due to invalid email format, please try again later."}
            };

            string retValue = "{\"error\":\"" + errorMessages["general"] + "\"}";

            //Check recaptcha
            if (HBTUmbracoFormsHelper.RecaptchaWork(response))
            {
                if (!ModelState.IsValid)
                {
                    return retValue;
                }

                if (ModelState.IsValid)
                {
                    SmtpClient client = new SmtpClient();
                    var mail = new MailMessage();
                    try
                    {
                        if (model.AcceptTerms)
                        {
                            //Retrive admin email from umbraco
                            string email = HBTUmbracoFormsHelper.GetEmailFromUmbraco();
                            mail.To.Add(email);
                            mail.From = new MailAddress(model.Email, model.FirstName);
                            mail.Subject = String.Format("Enquiry from customer: " + model.FirstName + " " + model.LastName + "(" + model.Email + ")");

                            mail.Body = "<p>";
                            foreach (var prop in model.GetType().GetProperties())
                            {
                                if (prop.Name != "AcceptTerms" && prop.Name != "Response")
                                    mail.Body = mail.Body + prop.Name + " : " + prop.GetValue(model, null) + "<br>";
                            }
                            mail.Body = mail.Body + "</p>";

                            mail.IsBodyHtml = true;
                            client.Send(mail);
                            retValue = "{\"success\":\"" + errorMessages["success"] + "\"}";
                        }
                        else
                        {
                            retValue = "{\"error\":\"" + errorMessages["accept_term"] + "\"}";
                        }
                    }
                    catch (Exception e)
                    {
                        retValue = "{\"error\":\"" + errorMessages["system"] + ":" + e.Message + "\"}";
                        return retValue;
                    }
                }
                return retValue;
            }
            else
            {
                retValue = "{\"error\":\"" + errorMessages["recaptcha"] + "\"}";
                return retValue;
            }
        }
    }
}