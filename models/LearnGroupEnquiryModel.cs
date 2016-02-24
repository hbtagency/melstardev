using System.ComponentModel.DataAnnotations;

namespace melbournestardev.models
{
    public class LearnGroupEnquiryModel : GeneralEnquiryModel
    {
        [Required]
        public string SchoolName { get; set; }
        [Required]
        public string SchoolAddress { get; set; }

        [Required]
        public string BookingDate { get; set; }

        public string TimeOfVisit { get; set; }

        public string YearLevel { get; set; }

        [Required]
        public string NumOfAdults { get; set; }

        [Required]
        public string NumOfTeachers { get; set; }

        [Required]
        public string NumOfStudents { get; set; }

        
    }
}