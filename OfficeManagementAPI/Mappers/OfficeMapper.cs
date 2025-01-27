using OfficeManagementAPI.DTOs;
using OfficeManagementAPI.Models;

namespace OfficeManagementAPI.Mappers
{
    public static class OfficeMapper
    {
        public static OfficeDto ToOfficeDto (this Office office)
        {
            return new OfficeDto
            {
                Id = office.Id,
                Name = office.Name,
                Location = office.Color,
                Employees = office.Employees?.Select(x => x.ToEmployeeDto()).ToList()
            };
        }
    }
}
