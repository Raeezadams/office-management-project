﻿using System.ComponentModel.DataAnnotations;

namespace OfficeManagementAPI.DTOs.Office
{
    public class CreateOfficeDto
    {
        [Required(ErrorMessage = "Office name is required.")]
        [StringLength(100, ErrorMessage = "Office name cannot exceed 100 characters.")]
        public string name { get; set; } = string.Empty;

        [Required(ErrorMessage = "Address is required.")]
        [StringLength(200, ErrorMessage = "Address cannot exceed 200 characters.")]
        public string address { get; set; } = string.Empty;

        [Required(ErrorMessage = "Email is required.")]
        [EmailAddress(ErrorMessage = "Invalid email format.")]
        public string email { get; set; } = string.Empty;

        [Required(ErrorMessage = "Phone number is required.")]
        [Phone(ErrorMessage = "Invalid phone number format.")]
        public string phone { get; set; } = string.Empty;

        [Required(ErrorMessage = "Maximum capacity is required.")]
        [Range(1, int.MaxValue, ErrorMessage = "Maximum capacity must be a positive number.")]
        public int maxCapacity { get; set; }

        [Required(ErrorMessage = "Color is required.")]
        [StringLength(20, ErrorMessage = "Color cannot exceed 20 characters.")]
        public string color { get; set; } = string.Empty;
    }
}
