using System.ComponentModel.DataAnnotations;

namespace melbournestardev.models
{
    public class GeneralEnquiryModel
    {
        public string Title { get; set; }
        [Required]
        public string FirstName { get; set; }
        [Required]
        public string LastName { get; set; }

        public string Position { get; set; }
        public string Company { get; set; }
        [Required]
        public string Phone { get; set; }
        public string Mobile { get; set; }

        [Required]
        public string Email { get; set; }
        public string Street { get; set; }
        public string Suburb { get; set; }
        public string State { get; set; }
        public string Postcode { get; set; }
        public string Comments { get; set; }

        [Required]
        public bool AcceptTerms { get; set; }

        //Google captcha
        [Required]
        public string Response { get; set; }
    }
}