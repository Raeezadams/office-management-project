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
                FirstName = employeeDto.firstName,
                LastName = employeeDto.lastName,
                OfficeId = employeeDto.officeId,
                Avatar = employeeDto.avatar,
            };
        }

        public static void UpdateEmployeeFromDto (this Employee employee, UpdateEmployeeDto updatEemployeeDto)
        {
            {
                employee.FirstName = updatEemployeeDto.firstName;
                employee.LastName = updatEemployeeDto.lastName;
                employee.Avatar = updatEemployeeDto.avatar;
            };
        }
    }
}
