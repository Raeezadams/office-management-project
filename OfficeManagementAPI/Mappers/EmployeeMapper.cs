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
                LastName = employee.LastName
            };
        }

        public static Employee ToEmployeeFromCreateDto(this CreateEmployeeDto employeeDto)
        {
            return new Employee
            {
                FirstName = employeeDto.FirstName,
                LastName = employeeDto.LastName,
                OfficeId = employeeDto.OfficeId,
            };
        }

        public static void UpdateEmployeeFromDto (this Employee employee, UpdateEmployeeDto updatEemployeeDto)
        {
            {
                employee.FirstName = updatEemployeeDto.FirstName;
                employee.LastName = updatEemployeeDto.LastName;
            };
        }
    }
}
