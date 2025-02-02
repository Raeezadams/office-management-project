namespace OfficeManagementAPI.Models
{
    public class Employee
    {
        public int Id { get; set; }
        public string FirstName { get; set; } = string.Empty;
        public string LastName { get; set; } = string.Empty;
        public string Avatar { get; set; } = string.Empty;
        public int OfficeId { get; set; } // Foreign Key
        public Office? Office { get; set; } // Relationship to Office
    }
}
