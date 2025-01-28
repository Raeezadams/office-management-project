using OfficeManagementAPI.Models;

namespace OfficeManagementAPI.Interfaces
{
    public interface IEmpolyeeRepository
    {
        Task<Employee> AddEmployeeAsync(Employee employee);
        Task<Employee?> GetEmployeeByIdAsync(int id);
    }
}
