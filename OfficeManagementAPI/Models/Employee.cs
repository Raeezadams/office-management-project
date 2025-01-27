namespace OfficeManagementAPI.Models
{
    public class Employee
    {
        public int Id { get; set; }
        public string? FirstName { get; set; }
        public string? LastName { get; set; }
        public int? OfficeId { get; set; } // Foreign Key
        public Office? Office { get; set; } // Relationship to Office
    }
}
