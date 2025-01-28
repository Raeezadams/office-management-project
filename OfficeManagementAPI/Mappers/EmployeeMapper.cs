using OfficeManagementAPI.DTOs.EmployeeDtos;
using OfficeManagementAPI.Models;

namespace OfficeManagementAPI.Mappers
{
    public static class EmployeeMapper
    {
        public static EmployeeDto ToEmployeeDto(this Employee employee)
        {
            return new EmployeeDto
            {
                Id = employee.Id,
                FirstName = employee.FirstName,
                LastName = employee.LastName
            };
        }
    }
}
