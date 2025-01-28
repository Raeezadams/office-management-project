namespace OfficeManagementAPI.DTOs.Employee
{
    public class CreateEmployeeDto
    {
        public string FirstName { get; set; } = string.Empty;
        public string LastName { get; set; } = string.Empty;
        public int OfficeId { get; set; }
    }
}
