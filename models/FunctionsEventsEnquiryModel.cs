using System.ComponentModel.DataAnnotations;

namespace melbournestardev.models
{
    public class FunctionsEventsEnquiryModel : GeneralEnquiryModel
    {
        [Required]
        public string EventType { get; set; }
        [Required]
        public string ProposedEventDate { get; set; }
        public string AlternativeDate { get; set; }
        [Required]
        public string NumOfGuests { get; set; }
        public string GuestArrivalTime { get; set; }
        public string GuestDepartTime { get; set; }
        [Required]
        public string BudgetPerPerson { get; set; }

    }
}