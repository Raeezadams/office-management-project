using Microsoft.EntityFrameworkCore;
using OfficeManagementAPI.Interfaces;
using OfficeManagementAPI.Models;

namespace OfficeManagementAPI.Repositories
{
    public class OfficeRepository : IOfficeRepository
    {
        private readonly AppDbContext _dbContext;

        public OfficeRepository(AppDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<IEnumerable<Office>> GetAllOfficesAsync()
        {
            return await _dbContext.Offices.Include(o => o.Employees).ToListAsync();
        }
    }
}
