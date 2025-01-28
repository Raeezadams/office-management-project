namespace OfficeManagementAPI.DTOs
{
    public class OfficeDto
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string Color { get; set; } = string.Empty;
        public int MaxCapacity { get; set; } 
        public string Phone { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public string Address { get; set; } = string.Empty;
        public int StaffCount => Employees?.Count ?? 0; 
        public List<EmployeeDto>? Employees { get; set; }
    }
}
