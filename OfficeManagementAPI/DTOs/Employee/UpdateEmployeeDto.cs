using System.ComponentModel.DataAnnotations;

namespace OfficeManagementAPI.DTOs.Employee
{
    public class UpdateEmployeeDto
    {
        [Required(ErrorMessage = "First name is required.")]
        [StringLength(50, ErrorMessage = "First name cannot exceed 50 characters.")]
        public string FirstName { get; set; } = string.Empty;

        [Required(ErrorMessage = "Last name is required.")]
        [StringLength(50, ErrorMessage = "Last name cannot exceed 50 characters.")]
        public string Avatar { get; set; } = string.Empty;
        public string LastName { get; set; } = string.Empty;
    }
}
