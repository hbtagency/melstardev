using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Umbraco.Web;
using System.Net.Mail;
using Melstar.Models;
using System.Net;
using Newtonsoft.Json;
using melbournestardev.models;
using System.Configuration;
using melbournestardev.helpers;

namespace Melstar.Controllers
{
    public class ContactController : Umbraco.Web.Mvc.SurfaceController
    {
        public String SendMail(ContactModel model)
        {
            string response = model.Response;
            List<string> resultList = new List<string>();

            //If required, could remove error message to config or umbraco.
            Dictionary<string, string> errorMessages = new Dictionary<string, string>()
            {
                {"general","Form validation error!"},
                {"success","Your Request was submitted successfully. We will contact you shortly."},
                {"recaptcha","Please complete recaptcha field!"},
                {"system","There was an error submitting the form, could possibly due to invalid email format, please try again later."}
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
