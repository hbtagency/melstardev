using System.Web.Mvc;

namespace melbournestardev.controllers
{
    public class ShowEnquiryFormController : Umbraco.Web.Mvc.SurfaceController
    {
        public PartialViewResult GeneralForm()
        {
            return PartialView("~/Views/Partials/_enquiry_general.cshtml");
        }

        public PartialViewResult FunctionEventsForm()
        {
            return PartialView("~/Views/Partials/_enquiry_functions_events.cshtml");
        }
    }
}