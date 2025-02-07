using Microsoft.EntityFrameworkCore;
using OfficeManagementAPI.DTOs.Office;
using OfficeManagementAPI.Interfaces;
using OfficeManagementAPI.Mappers;
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

        public async Task<Office> AddOfficeAsync(Office office)
        {
            await _dbContext.AddAsync(office);
            await _dbContext.SaveChangesAsync();
            return office;
        }

        public async Task<Office?> DeleteOfficeByIdAsync(int id)
        {
            var exsitingOffice = await _dbContext.Offices.FirstOrDefaultAsync(x => x.Id == id);

            if (exsitingOffice == null)
            {
                return null;
            }

            _dbContext.Offices.Remove(exsitingOffice);
            await _dbContext.SaveChangesAsync();

            return exsitingOffice;

        }

        public async Task<List<Office>> GetAllAsync()
        {
            return await _dbContext.Offices.Include(o => o.Employees).ToListAsync();

        }

        public async Task<Office?> GetOfficeByIdAsync(int id)
        {
            return await _dbContext.Offices.Include(x => x.Employees).FirstOrDefaultAsync(x => x.Id == id);
       
        }

        public async Task<Office?> UpdateOfficeAsync(int id, UpdateOfficeDto updateOfficeDto)
        {
            var exsitingOffice = await _dbContext.Offices.FindAsync(id);

            if(exsitingOffice == null)
            {
                return null;
            }

            exsitingOffice.UpdateOfficeFromDto(updateOfficeDto);
            await _dbContext.SaveChangesAsync();

            return exsitingOffice;

        }
    }
}
