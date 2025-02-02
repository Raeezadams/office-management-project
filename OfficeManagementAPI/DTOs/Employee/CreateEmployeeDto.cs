using System.ComponentModel.DataAnnotations;

namespace OfficeManagementAPI.DTOs.Employee
{
    public class CreateEmployeeDto
    {
        [Required(ErrorMessage = "First name is required.")]
        [StringLength(50, ErrorMessage = "First name cannot exceed 50 characters.")]
        public string FirstName { get; set; } = string.Empty;

        [Required(ErrorMessage = "Last name is required.")]
        [StringLength(50, ErrorMessage = "Last name cannot exceed 50 characters.")]
        public string LastName { get; set; } = string.Empty;

        [Required(ErrorMessage = "Office ID is required.")]
        [Range(1, int.MaxValue, ErrorMessage = "Office ID must be a positive number.")]
        public string Avatar { get; set; } = string.Empty;
        public int OfficeId { get; set; }
    }
}
