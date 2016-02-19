
using System.ComponentModel.DataAnnotations;


namespace Melstar.Models
{
    public class ContactModel
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        [Required]
        public string Email { get; set; }
        public string Phone { get; set; }
        public string PostCode { get; set; }
        public string State { get; set; }

        public string Message { get; set; }

        //Google captcha
        [Required]
        public string Response { get; set; }
    }
}