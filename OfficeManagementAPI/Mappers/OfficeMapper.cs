﻿using OfficeManagementAPI.DTOs.Employee;
using OfficeManagementAPI.DTOs.Office;
using OfficeManagementAPI.DTOs.OfficeDto;
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
                Address = office.Address,
                Phone = office.Phone,
                Email = office.Email,
                MaxCapacity = office.MaxCapacity,
                Color = office.Color,
                Employees = office.Employees?.Select(x => x.ToEmployeeDto()).ToList()
            };
        }

        public static Office ToOfficeFromCreateDto (this CreateOfficeDto officeDto)
        {
            return new Office
            {
                Name = officeDto.name,
                Address = officeDto.address,
                Email = officeDto.email,
                Phone = officeDto.phone,
                MaxCapacity = officeDto.maxCapacity,
                Color = officeDto.color

            };
        }

        public static void UpdateOfficeFromDto(this Office office, UpdateOfficeDto updateOfficeDto)
        {
            {
                office.Name = updateOfficeDto.name;
                office.Address = updateOfficeDto.address;
                office.Email = updateOfficeDto.email;
                office.Phone = updateOfficeDto.phone;
                office.MaxCapacity = updateOfficeDto.maxCapacity;
                office.Color = updateOfficeDto.color;
            }
        }
    }
}
