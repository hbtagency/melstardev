using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Web;

namespace melbournestardev.helpers
{
    public class HBTUmbracoHelper
    {
        //Stripe HTML Tags
        public static string StripTagsRegex(string source)
        {
            return Regex.Replace(source, "<.*?>", string.Empty);
        }

        //Stripe Double Quote
        public static string ReplaceDoubleQuote(string source)
        {
            return Regex.Replace(source, "\"", string.Empty);
        }

        //Stripe Multi Space
        public static string ReplaceMultipleSpaces(string source)
        {
            return Regex.Replace(source, @"\s+", " ");
        }

        //Take a raw html editor field say from Umbraco editor, but returns text only. 
        public static string TrimHtml(string raw_html)
        {
            string noHTML = Regex.Replace(raw_html, @"<[^>]+>|&nbsp;", "").Trim();
            string noHTMLNormalised = Regex.Replace(noHTML, @"\s{2,}", " ");
            return noHTMLNormalised;
        }

        //Truncate string to given words limits, eg: 
        public static string TruncateString(string input, int length = 200, string ommission = "...")
        {
            if (input == null || input.Length < length)
                return input;
            int iNextSpace = input.LastIndexOf("", length);
            return string.Format("{0}" + ommission, input.Substring(0, (iNextSpace > 0) ? iNextSpace : length).Trim());
        }

        //Generate Json from Dictionary
        public static string FromDictionaryToJson(Dictionary<string, string> dictionary)
        {
            var kvs = dictionary.Select(kvp => string.Format("\"{0}\":\"{1}\"", kvp.Key, string.Join(",", kvp.Value)));
            return string.Concat("{", string.Join(",", kvs), "}");
        }

        //Generate Json from List
        public static string FromListOfJsonToJson(List<string> list)
        {
            StringBuilder TheListBuilder = new StringBuilder();

            TheListBuilder.Append("[");
            int TheCounter = 0;

            foreach (string TheObject in list)
            {
                TheCounter++;
                TheListBuilder.Append(TheObject);

                if (TheCounter != list.Count())
                {
                    TheListBuilder.Append(",");
                }
            }
            TheListBuilder.Append("]");
            return TheListBuilder.ToString();

        }
    }
}