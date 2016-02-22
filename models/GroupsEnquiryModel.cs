using System.ComponentModel.DataAnnotations;

namespace melbournestardev.models
{
    public class GroupsEnquiryModel : GeneralEnquiryModel
    {
        [Required]
        public string GroupName { get; set; }

        public string Country { get; set; }

        [Required]
        public string ProposedEventDate { get; set; }

        public string TimeOfVisit { get; set; }

        public string NumOfAdults { get; set; }

        public string NumOfChildren { get; set; }

        public string NumOfConcessionAdults { get; set; }

    }
}