using melbournestardev.models;
using Newtonsoft.Json;
using System;
using System.Configuration;
using System.Net;

namespace melbournestardev.helpers
{
    public class HBTUmbracoFormsHelper
    {
        //This method will return Admin Email by pull corresponding field from Umbraco.
        public static string GetEmailFromUmbraco(string mailName)
        {
            //Please refer to umbraco->settings->dictionary->configs
            return umbraco.library.GetDictionaryItem(mailName);
        }

        //This method will return Check if recaptcha works. 
        public static Boolean RecaptchaWork(string recaptchaResponse)
        {
            var response = recaptchaResponse;

            //Please find recaptcha secret from web.config settings
            string secret = Convert.ToString(ConfigurationManager.AppSettings["recaptchaSecret"]);
            var client = new WebClient();
            var reply =
                client.DownloadString(
                    string.Format("https://www.google.com/recaptcha/api/siteverify?secret={0}&response={1}", secret, response));

            var captchaResponse = JsonConvert.DeserializeObject<CaptchaResponse>(reply);

            //when response is false check for the error message
            if (!captchaResponse.Success)
            {
                return false;
            }
            else
            {
                return true;
            }

        }
    }
}