using OfficeManagementAPI.Models;
using System.Collections;

namespace OfficeManagementAPI.Interfaces
{
    public interface IOfficeRepository
    {
        Task<IEnumerable<Office>> GetAllOfficesAsync();
    }
}
