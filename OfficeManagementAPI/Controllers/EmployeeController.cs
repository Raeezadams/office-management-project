using Microsoft.AspNetCore.Mvc;
using OfficeManagementAPI.DTOs.Employee;
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
    }
}
