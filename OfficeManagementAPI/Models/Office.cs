namespace OfficeManagementAPI.Models
{
    public class Office
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string Address { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public string Phone { get; set; } = string.Empty;
        public int MaxCapacity { get; set; }
        public string Color { get; set; } = string.Empty;
        public ICollection<Employee>? Employees { get; set; } // Relationship
    }

}
