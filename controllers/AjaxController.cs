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
    public class AjaxController : Umbraco.Web.Mvc.SurfaceController
    {
        public JsonResult getAllPosts(){
            List<string> result = new List<string>();
            var contentNode = Umbraco.Content(1067);
            foreach (var obj in contentNode.Descendants().Where("NodeTypeAlias == \"newsevents_post\"")) {
                var post = new Dictionary<string, string>();
                post.Add("title", obj.pageTitle);
                string raw_content = obj.postContent.ToString();
                string content_text = HBTUmbracoHelper.TrimHtml(raw_content);
                string exerpt_text = HBTUmbracoHelper.TruncateString(content_text, 150);
                post.Add("subtitle", exerpt_text);
                post.Add("url", obj.Url);
                post.Add("featuredImage", Umbraco.Media(obj.featuredImage).umbracoFile);
                post.Add("categoryName", obj.Parent().pageTitle);
                post.Add("categoryID", Convert.ToString(obj.Parent().Id));

                string dealjsonString = HBTUmbracoHelper.FromDictionaryToJson(post);
                result.Add(dealjsonString);
            }
            return Json(HBTUmbracoHelper.FromListOfJsonToJson(result), JsonRequestBehavior.AllowGet);

        }

    }
}