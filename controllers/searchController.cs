using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Umbraco.Core.Models;
using Umbraco.Web;
using Umbraco.Web.Models;
using System.Text;
using System.Web.Mvc;
using Newtonsoft.Json;
using System.Text.RegularExpressions;
using melbournestardev.helpers;


namespace melstardev.controllers
{
    public class searchController : Umbraco.Web.Mvc.SurfaceController
    {
        public JsonResult getSearch()
        {
            List<string> result = new List<string>();
            var rootNode = Umbraco.Content(1049);

            foreach (var obj in rootNode.Descendants())
            {
                if(Convert.ToString(obj.TemplateId) != "0")
                {
                    var page = new Dictionary<string, string>();
                    page.Add("name", obj.Name);
                    page.Add("title", obj.pageTitle);
                    page.Add("parentNodeName", obj.Parent().pageTitle);
                    page.Add("url", obj.Url);

                    string resultjsonString = HBTUmbracoHelper.FromDictionaryToJson(page);
                    result.Add(resultjsonString);
                }
                
            }

            return Json(HBTUmbracoHelper.FromListOfJsonToJson(result), JsonRequestBehavior.AllowGet);
            
        }
    }
}