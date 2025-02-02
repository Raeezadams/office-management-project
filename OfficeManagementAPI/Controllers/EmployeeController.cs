using Microsoft.AspNetCore.Mvc;
using OfficeManagementAPI.DTOs.Employee;
using OfficeManagementAPI.Helpers;
using OfficeManagementAPI.Interfaces;
using OfficeManagementAPI.Mappers;
using OfficeManagementAPI.Models;

namespace OfficeManagementAPI.Controllers
{
    [Route("api/employee")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        private readonly IEmpolyeeRepository _empolyeeRepo;

        public EmployeeController(IEmpolyeeRepository empolyeeRepos)
        {
            _empolyeeRepo = empolyeeRepos;
        }

        [HttpPost("AddEmployee")]
        public async Task<IActionResult> AddEmployee([FromBody] CreateEmployeeDto employeeDto )
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (!AvatarValidator.IsAvatarValid(employeeDto.Avatar))
            {
                return BadRequest();
            }

            var employee = employeeDto.ToEmployeeFromCreateDto();

            var createdEmployee = await _empolyeeRepo.AddEmployeeAsync(employee);

            return CreatedAtAction(nameof(GetEmployeeById), new { id = createdEmployee.Id }, createdEmployee);

        }

        [HttpGet("{id:int}")]
        public async Task<IActionResult> GetEmployeeById(int id)
        {
            var employee = await _empolyeeRepo.GetEmployeeByIdAsync(id);

            if (employee == null)
            {
                return NotFound();
            }

            return Ok(employee.ToEmployeeDto());
        }

        [HttpPut]
        [Route("UpdateEmployee/{id:int}")]
        public async Task<IActionResult> UpdateEmployee(int id, [FromBody] UpdateEmployeeDto updateEmployeeDto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }

            if (!AvatarValidator.IsAvatarValid(updateEmployeeDto.Avatar))
            {
                return BadRequest("Invalid avatar selected.");
            }

            var updatedEmployee = await _empolyeeRepo.UpdateEmployeeAsync(id, updateEmployeeDto);

            if (updatedEmployee == null)
            {
                return NotFound("Employee not found");
            }

            return Ok(updatedEmployee.ToEmployeeDto());
        }

        [HttpDelete]
        [Route("DeleteEmployee/{id:int}")]
        public async Task<IActionResult> DeleteEmployee([FromRoute]int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }

            var employee = await _empolyeeRepo.DeleteEmployeeByIdAsync(id);

            if(employee == null)
            {
                return NotFound("Employee does not exsist");
            }

            return Ok("Removed employee");

        }

        [HttpGet]
        [Route("GetEmployeesByOffice/{officeId:int}")]
        public async Task<IActionResult> GetEmployeesByOfficeId([FromRoute]int officeId)
        {
            var employees = await _empolyeeRepo.GetEmployeeByOfficeIdAsync(officeId);

            if (employees == null || !employees.Any())
            {
                return NotFound($"No employees found for Office ID {officeId}");
            }

            var employeeDto = employees.Select( x => x.ToEmployeeDto() );

            return Ok(employeeDto);

        }

    }
}
