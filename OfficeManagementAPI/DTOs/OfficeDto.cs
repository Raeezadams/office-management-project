namespace OfficeManagementAPI.DTOs
{
    public class OfficeDto
    {
        public int Id { get; set; }
        public string? Name { get; set; }
        public string? Location { get; set; }
        public List<EmployeeDto>? Employees { get; set; }
    }
}
