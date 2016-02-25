using System;
using System.Collections.Generic;
using System.Net.Mail;
using Melstar.Models;
using System.Configuration;
using melbournestardev.helpers;
using System.Collections.Specialized;

namespace Melstar.Controllers
{
    public class ContactController : Umbraco.Web.Mvc.SurfaceController
    {
        public String SendMail(ContactModel model)
        {
            NameValueCollection section =
                (NameValueCollection)ConfigurationManager.GetSection("FormErrorMessage");
            string response = model.Response;
            List<string> resultList = new List<string>();

            //If required, could remove error message to config or umbraco.

            Dictionary<string, string> errorMessages = new Dictionary<string, string>()
            {
                 {"general",section["general"]},
                 {"success",section["success"]},
                 {"recaptcha",section["recaptcha"]},
                 {"accept_term",section["accept_term"]},
                 {"system",section["system"]}
            };

            string retValue = "{\"error\":\""+ errorMessages["general"] + "\"}";

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
                        //Retrive admin email from umbraco
                        string email = HBTUmbracoFormsHelper.GetEmailFromUmbraco(); 
                        mail.To.Add(email);
                        mail.From = new MailAddress(model.Email, model.FirstName);
                        mail.Subject = String.Format("Enquiry from customer: " + model.FirstName + " " + model.LastName + "(" + model.Email + ")");
                        mail.Body = "<p>" + model.Message + "<p>" + "<br>" + "Phone: " + model.Phone + "<br>" + "PostCode: " + model.PostCode + "<br>" + "State: " + model.State;
                        mail.IsBodyHtml = true;
                        client.Send(mail);

                        retValue = "{\"success\":\""+ errorMessages["success"] + "\"}";
                    }

                    catch (Exception e)
                    {
                        retValue = "{\"error\":\"" + errorMessages["system"] + ":"+e.Message+"\"}";
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
