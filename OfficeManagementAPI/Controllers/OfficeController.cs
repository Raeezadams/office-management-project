using Microsoft.AspNetCore.Mvc;
using OfficeManagementAPI.DTOs;
using OfficeManagementAPI.DTOs.Office;
using OfficeManagementAPI.Interfaces;
using OfficeManagementAPI.Mappers;
using OfficeManagementAPI.Repositories;

namespace OfficeManagementAPI.Controllers
{
    [Route("api/offices")]
    [ApiController]
    public class OfficeController : ControllerBase
    {
        private readonly IOfficeRepository _officerepo;

        public OfficeController(IOfficeRepository officerepo)
        {
            _officerepo = officerepo;
        }

        [HttpGet("GetAllOffices")]
        public async Task<IActionResult> GetAllOffices()
        {
            var offices = await _officerepo.GetAllAsync();

            var officeDto = offices.Select( x => x.ToOfficeDto()).ToList();

            return Ok(officeDto);
        }

        [HttpGet("{id:int}")]
        public async Task<IActionResult> GetOfficeById([FromRoute] int id)
        {
            var office = await _officerepo.GetOfficeByIdAsync(id);

            if (office == null)
            {
                return NotFound();
            }

            var officeDto = office.ToOfficeDto();
            return Ok(officeDto);
        }

        [HttpPost("CreateOffice")]
        public async Task<IActionResult> CreateOffice([FromBody] CreateOfficeDto officeDto )
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }

            var office = officeDto.ToOfficeFromCreateDto();
            var createdOffice = await _officerepo.AddOfficeAsync(office);

            return CreatedAtAction(nameof(GetOfficeById), new { id = createdOffice.Id }, createdOffice.ToOfficeDto());
        }

    }
}
