using OfficeManagementAPI.DTOs.Employee;
using OfficeManagementAPI.Models;

namespace OfficeManagementAPI.Interfaces
{
    public interface IEmpolyeeRepository
    {
        Task<List<Employee>> GetEmployeeByOfficeIdAsync(int officeId);
        Task<Employee> AddEmployeeAsync(Employee employee);
        Task<Employee?> GetEmployeeByIdAsync(int id);
        Task<Employee?> UpdateEmployeeAsync(int id, UpdateEmployeeDto updateEmployeeDto);
        Task<Employee?> DeleteEmployeeByIdAsync(int id);
    }
}
