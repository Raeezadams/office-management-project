﻿using OfficeManagementAPI.Models;
using System.Collections;

namespace OfficeManagementAPI.Interfaces
{
    public interface IOfficeRepository
    {
        Task<List<Office>> GetAllAsync();
        Task<Office?> GetOfficeByIdAsync(int id);  
        Task<Office> AddOfficeAsync(Office office); 
    }
}
