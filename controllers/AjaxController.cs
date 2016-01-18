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

namespace melstardev.controllers
{
    public class AjaxController : Umbraco.Web.Mvc.SurfaceController
    {

        private string FromDictionaryToJson(Dictionary<string, string> dictionary)
        {
            var kvs = dictionary.Select(kvp => string.Format("\"{0}\":\"{1}\"", kvp.Key, string.Join(",", kvp.Value)));
            return string.Concat("{", string.Join(",", kvs), "}");
        }

        private string FromListOfJsonToJson(List<string> list)
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

        public JsonResult getAllPosts(){
            List<string> result = new List<string>();
            var contentNode = Umbraco.Content(1067);
            foreach (var obj in contentNode.Descendants().Where("NodeTypeAlias == \"newsevents_post\"")) {
                var post = new Dictionary<string, string>();
                post.Add("title", obj.pageTitle);
                post.Add("subtitle", obj.subTitle);
                post.Add("url", obj.Url);
                post.Add("featuredImage", Umbraco.Media(obj.featuredImage).umbracoFile);
                post.Add("categoryName", obj.Parent().pageTitle);
                post.Add("categoryID", Convert.ToString(obj.Parent().Id));

                string dealjsonString = FromDictionaryToJson(post);
                result.Add(dealjsonString);
            }
            return Json(FromListOfJsonToJson(result), JsonRequestBehavior.AllowGet);

        }

    }
}