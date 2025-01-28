using OfficeManagementAPI.Interfaces;
using OfficeManagementAPI.Models;
using Microsoft.EntityFrameworkCore;
using OfficeManagementAPI.DTOs.Employee;
using OfficeManagementAPI.Mappers;


namespace OfficeManagementAPI.Repositories
{
    public class EmployeeRepository : IEmpolyeeRepository
    {
        private readonly AppDbContext _dbContext;
        public EmployeeRepository( AppDbContext dbContext )
        {
            _dbContext = dbContext;
        }

        public async Task<Employee> AddEmployeeAsync(Employee employee)
        {
            await _dbContext.Employees.AddAsync( employee );
            await _dbContext.SaveChangesAsync();
            return employee;
        }

        public async Task<Employee?> DeleteEmployeeByIdAsync(int id)
        {
            var exsitingEmployee = await _dbContext.Employees.FirstOrDefaultAsync( x => x.Id == id );

            if ( exsitingEmployee == null)
            {
                return null;
            }

            _dbContext.Employees.Remove(exsitingEmployee );
            await _dbContext.SaveChangesAsync();

            return exsitingEmployee;
        }

        public async Task<Employee?> GetEmployeeByIdAsync(int id)
        {
            return await _dbContext.Employees.Include(x => x.Office).FirstOrDefaultAsync( x => x.Id == id );
        }

        public async Task<Employee?> UpdateEmployeeAsync(int id, UpdateEmployeeDto updateEmployeeDto)
        {
            var exsistingEmployee = await _dbContext.Employees.FindAsync(id);

            if ( exsistingEmployee == null )
            {
                return null;
            }

            exsistingEmployee.UpdateEmployeeFromDto(updateEmployeeDto);

            await _dbContext.SaveChangesAsync();

            return exsistingEmployee;

        }
    }
}
