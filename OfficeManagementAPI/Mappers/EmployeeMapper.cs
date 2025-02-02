using OfficeManagementAPI.DTOs.Employee;
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
                LastName = employee.LastName,
                Avatar = employee.Avatar,

            };
        }

        public static Employee ToEmployeeFromCreateDto(this CreateEmployeeDto employeeDto)
        {
            return new Employee
            {
                FirstName = employeeDto.FirstName,
                LastName = employeeDto.LastName,
                OfficeId = employeeDto.OfficeId,
                Avatar = employeeDto.Avatar,
            };
        }

        public static void UpdateEmployeeFromDto (this Employee employee, UpdateEmployeeDto updatEemployeeDto)
        {
            {
                employee.FirstName = updatEemployeeDto.FirstName;
                employee.LastName = updatEemployeeDto.LastName;
                employee.Avatar = updatEemployeeDto.Avatar;
            };
        }
    }
}
