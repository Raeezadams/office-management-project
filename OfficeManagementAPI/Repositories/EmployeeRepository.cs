using OfficeManagementAPI.Interfaces;
using OfficeManagementAPI.Models;
using Microsoft.EntityFrameworkCore;


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

        public async Task<Employee?> GetEmployeeByIdAsync(int id)
        {
            return await _dbContext.Employees.Include(x => x.Office).FirstOrDefaultAsync( x => x.Id == id );
        }
    }
}
