using melbournestardev.helpers;
using melbournestardev.models;
using System;
using System.Collections.Generic;
using System.Net.Mail;
using System.Collections.Specialized;
using System.Configuration;

namespace melbournestardev.controllers
{
    public class FilmEnquiryController : Umbraco.Web.Mvc.SurfaceController
    {
        // GET: GeneralEnquiry
        public String submitForm(GeneralEnquiryModel model)
        {
            NameValueCollection section =
                (NameValueCollection)ConfigurationManager.GetSection("FormErrorMessage");
            string response = model.Response;
            List<string> resultList = new List<string>();

            Dictionary<string, string> errorMessages = new Dictionary<string, string>()
            {
                 {"general",section["general"]},
                 {"success",section["success"]},
                 {"recaptcha",section["recaptcha"]},
                 {"accept_term",section["accept_term"]},
                 {"system",section["system"]}
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
                            string email = HBTUmbracoFormsHelper.GetEmailFromUmbraco("Film Email");
                            mail.To.Add(email);
                            mail.From = new MailAddress(model.Email, model.FirstName);
                            mail.Subject = String.Format("Enquiry from customer: " + model.FirstName + " " + model.LastName + "(" + model.Email + ")");
                            mail.Body = "<p>";
                            foreach (var prop in model.GetType().GetProperties())
                            {
                                if(prop.Name != "AcceptTerms" && prop.Name != "Response")
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