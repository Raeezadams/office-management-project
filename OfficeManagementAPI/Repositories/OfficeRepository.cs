﻿using Microsoft.EntityFrameworkCore;
using OfficeManagementAPI.Helpers;
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

        public async Task<List<Office>> GetAllAsync()
        {
            return await _dbContext.Offices.Include(o => o.Employees).ToListAsync();

        }

        public async Task<Office?> GetOfficeByIdAsync(int id)
        {
            return await _dbContext.Offices.Include(x => x.Employees).FirstOrDefaultAsync(x => x.Id == id);
       
        }
    }
}
