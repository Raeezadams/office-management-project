namespace OfficeManagementAPI.Models
{
    public class Office
    {
        public int Id { get; set; }
        public string? Name { get; set; }
        public string? Address { get; set; }
        public string? Email { get; set; }
        public string? Phone { get; set; }
        public int? MaxCapacity { get; set; }
        public string? Color { get; set; }
        public ICollection<Employee>? Employees { get; set; } // Relationship
    }

}
