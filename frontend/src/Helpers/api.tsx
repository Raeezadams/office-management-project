import axios from 'axios';

const API_BASE_URL = 'http://localhost:5026/api';

// Fetch offices from the backend
export const fetchOffices = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/offices/GetAllOffices`);
    return response.data;
  } catch (error) {
    console.error('Error fetching offices:', error);
    throw error;
  }  
};

// Fetch employees by officeId from the backend
export const fetchEmployees = async (officeId: number) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/employee/GetEmployeesByOffice/${officeId}`)
    console.log(response)
    return response.data;
  } catch (error) {
    console.error("Failed to fetch employees: ", error);
    throw error
  }
}
