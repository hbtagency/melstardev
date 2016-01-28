using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Umbraco.Web;
using System.Net.Mail;
using Melstar.Models;


namespace Melstar.Controllers
{
    public class ContactController : Umbraco.Web.Mvc.SurfaceController
    {
        public String SendMail(ContactModel model)
        {
            List<string> resultList = new List<string>();
            string retValue = "{\"error\":\"Validation error, please put in the correct email format. As well as required fields.\"}";

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
                    //Update your email address
                    string email = GetEmailFromUmbraco(); 
                    mail.To.Add(email);
                    mail.From = new MailAddress(model.Email, model.FirstName);
                    mail.Subject = String.Format("Enquiry from customer: " + model.FirstName + " " + model.LastName + "(" + model.Email + ")");
                    mail.Body = "<p>" + model.Message + "<p>" + "<br>" + "Phone: " + model.Phone + "<br>" + "PostCode: " + model.PostCode + "<br>" + "State: " + model.State;
                    mail.IsBodyHtml = true;
                    client.Send(mail);

                    retValue = "{\"success\":\"Your Request for Contact was submitted successfully. We will contact you shortly.\"}";
                }

                catch (Exception e)
                {
                    retValue = "{\"error\":\"There was an error submitting the form, could possibly due to invalid email format, please try again later." + e.Message + "\"}";
                    return retValue;
                }

            }
            return retValue;
        }

        private string GetEmailFromUmbraco()
        {
            //This is a hardcoded name, please refer to umbraco->settings->dictionary->configs
            return umbraco.library.GetDictionaryItem("Admin Email");
        }
    }


}
